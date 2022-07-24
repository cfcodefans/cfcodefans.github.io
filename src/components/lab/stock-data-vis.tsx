// import { CircularProgress } from "@material-ui/core"
import { DateRangeSlide, JsonpDataLoader, Spinner } from "components/gadgets"
import { format } from "date-fns"
import { addDate, i, jsf, Range, yesterday } from "lib/commons"
import _, { round } from "lodash"
import React, { useRef, useState } from "react"
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryLine, VictoryCursorContainer, VictoryCandlestick, VictoryTooltip, VictoryAxis, LineSegment, VictoryBar } from "victory"
import { CallbackArgs } from "victory-core/lib/types/callbacks"
import { STOCK } from "./stocks"

// import { CircularProgress } from "@material-ui/core/CircularProgress"

const FILENAME = "stock-data-vis.tsx"

type TStockDataVO = {
    start: Date
    end: Date
    dailyPrices: TStockPriceVO[]
    highest: number
    lowest: number
    ma5: number[]
    ma20: number[]
    ma60?: number[]
}

type TStockPriceVO = {
    x: string
    // y?: number
    open: number
    close: number
    low: number
    high: number
    color: string

    ma5: number
    ma20: number
    ma60?: number

    volume: number
    // turnover: number
    trade: number
}

export namespace STOCK_CMP {
    function priceTooltip({ datum }: { datum: STOCK.TStockData }): string[] {
        return [`open: ${datum.open}`, `high: ${datum.high}`, `low: ${datum.low}`, `close: ${datum.close}`]
    }
    function turnoverTooltip({ datum }: { datum: STOCK.TStockData }): string[] {
        return [`volume: ${datum.volume}`, `turnover: ${datum.turnover}`, `trade: ${datum.trade}`]
    }

    type TSimpleStockSearchConds = { code: string, start: Date, end: Date }

    export function StockInfoPanel({ _code, _start, _end }: { _code: string, _start: Date, _end: Date }): JSX.Element {

        function mkUrl({ code, start, end }: TSimpleStockSearchConds): string {
            return STOCK.SOHU_STOCK.mkJsonpUrlReq("cn_" + code, "cn", parseInt(code), start || addDate(yesterday(), -180), end || yesterday())
        }

        const codeInputRef: React.RefObject<HTMLInputElement> = useRef()
        const rangeRef: React.MutableRefObject<Range<Date>> = useRef({ _1: _start, _2: _end })
        const [url, setUrl] = useState(mkUrl({ code: _code, start: _start, end: _end }))

        i(FILENAME, "StockInfoPanel.render", url)

        return <div className="d-flex flex-column bg-white rounded-1 p-2">
            <div className="row">
                <div>
                    <label className="mr-2" htmlFor="stock_code">Stock Code:</label>
                    <input id="stock_code" type="text" defaultValue={_code} ref={codeInputRef} />
                </div>
                <button className="btn btn-sm btn-primary" title="Search" onClick={(ev) => {
                    const code = codeInputRef.current.value
                    const { _1: start, _2: end } = rangeRef.current
                    setUrl(mkUrl({ code, start, end }))
                }}>Search</button>
            </div>
            <div className="row pt-4 px-5">
                <DateRangeSlide onDateRangeChange={(d1: Date, d2: Date) => rangeRef.current = { _1: d1, _2: d2 }}
                    start={_start}
                    min={_start}
                    end={_end}
                    max={_end}
                    stepDay={1} />
            </div>
            <div>
                {jsf(url)}
                <JsonpDataLoader url={url}
                    callbackFnName={"cn_" + (codeInputRef.current?.value || _code)}
                    callbackFn={(resp) => Promise.resolve(resp as STOCK.SOHU_STOCK.RawResp[])}
                    renderCmp={(raws: STOCK.SOHU_STOCK.RawResp[]) => {
                        const [raw] = raws
                        return <STOCK_CMP.StockCandleChart sds={raw.hq.map(d => STOCK.SOHU_STOCK.toTStockData(d))} />
                    }}
                    fallbackCmp={() => <Spinner />} />
            </div>
        </div>
    }

    function mkStockDataVO(sds: STOCK.TStockData[]): TStockDataVO {
        const dailyPrices: TStockPriceVO[] = sds.map(sd => ({
            x: format(sd.date, "MM-dd"),
            open: sd.open,
            close: sd.close,
            high: sd.high,
            low: sd.low,

            volume: sd.volume,
            turnover: sd.turnover,
            trade: sd.trade,

            color: sd.close > sd.open ? "red" : "green",
            ma5: NaN, ma20: NaN,
        }))
        const closePrices = dailyPrices.map(dp => dp.close)
        const ma5 = STOCK.movingAverage(closePrices, 5)
        ma5.forEach((v, i) => dailyPrices[i].ma5 = v)
        const ma20 = STOCK.movingAverage(closePrices, 20)
        ma20.forEach((v, i) => dailyPrices[i].ma20 = v)
        return {
            dailyPrices,
            highest: _.maxBy(dailyPrices, "high").high,
            lowest: _.maxBy(dailyPrices, "low").low,
            ma20,
            ma5,
            start: sds[0].date,
            end: _.last(sds).date
        }
    }

    export function StockCandleChart({ sds }: { sds: STOCK.TStockData[] }): JSX.Element {
        const data: TStockDataVO = mkStockDataVO(sds) //useMemo(() => mkStockDataVO(sds), [sds])

        i(FILENAME, "StockCandleChart.render", data.start, data.end)

        return <div>
            <VictoryChart theme={VictoryTheme.material}
                scale={{ x: "time" }}
                width={640}
                height={320}
                padding={{ left: 60 }}
                domainPadding={20}>

                <VictoryGroup>
                    <VictoryLine colorScale={["lightblue"]} standalone={true}
                        containerComponent={
                            <VictoryCursorContainer cursorLabel={(datum) => `${round(datum.x, 2)}, ${round(datum.y, 2)}`} />
                        }
                        data={data.dailyPrices}
                        y={(datum: TStockPriceVO) => datum.close} />
                    <VictoryLine colorScale={["orange"]}
                        data={data.dailyPrices}
                        y={(datum) => datum["ma5"]} />
                    <VictoryLine colorScale={["green"]}
                        data={data.dailyPrices}
                        y={(datum) => datum["ma20"]} />

                    <VictoryCandlestick
                        data={data.dailyPrices}
                        labelComponent={<VictoryTooltip />}
                        labels={priceTooltip}
                        style={{ data: { fill: (args: CallbackArgs) => args.datum.color } }}
                    />
                </VictoryGroup>

                <VictoryAxis gridComponent={<LineSegment />}
                    tickCount={10}
                    dependentAxis
                    style={{ grid: { stroke: "grey" } }} />
                <VictoryAxis gridComponent={<LineSegment />}
                    fixLabelOverlap={true}
                    style={{ grid: { stroke: "grey" } }} />
            </VictoryChart>
            <VictoryChart theme={VictoryTheme.material}
                scale={{ x: "time" }}
                width={640}
                height={160}
                padding={{ left: 60, bottom: 40 }}
                domainPadding={20}>
                <VictoryBar
                    barRatio={0.9}
                    labelComponent={<VictoryTooltip />}
                    labels={turnoverTooltip}
                    style={{ data: { fill: (args: CallbackArgs) => args.datum.color } }}
                    data={data.dailyPrices}
                    y={(datum) => datum["turnover"]} />
                <VictoryAxis gridComponent={<LineSegment />}
                    fixLabelOverlap={true}
                    style={{ grid: { stroke: "grey" } }} />
                <VictoryAxis gridComponent={<LineSegment />}
                    tickCount={3}
                    dependentAxis
                    style={{ grid: { stroke: "grey" } }} />
            </VictoryChart>
        </div>
    }


}