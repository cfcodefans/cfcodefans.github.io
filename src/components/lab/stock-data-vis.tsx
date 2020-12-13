import { format } from "date-fns"
import { i } from "lib/commons"
import _, { round } from "lodash"
import React, { useMemo } from "react"
import * as vic from "victory"
import { CallbackArgs } from "victory-core"
import { STOCK } from "./stocks"

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

    export function StockInfoPanel({ _code, _start, _end }: { _code: string, _start: Date, _end: Date }): JSX.Element {
        return <div className="d-flex flex-column bg-white rounded-1 p-2">
            <div className="d-flex">
                <div>
                    <input type="number" />
                </div>
                <div>
                    <input type="date" id="startDateInput" />
                </div>
                <div>
                    <input type="date" id="endDateInput" />
                </div>
            </div>
        </div>
    }

    export function StockCandleChart({ sds }: { sds: STOCK.TStockData[] }): JSX.Element {
        const data: TStockDataVO = useMemo(() => {
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
        }, [sds])

        i(FILENAME, "StockCandleChart.render")

        return <div>
            <vic.VictoryChart theme={vic.VictoryTheme.material}
                scale={{ x: "time" }}
                width={640}
                height={320}
                padding={{ left: 60 }}
                domainPadding={20}>

                <vic.VictoryGroup>
                    <vic.VictoryLine colorScale={["lightblue"]} standalone={true}
                        containerComponent={
                            <vic.VictoryCursorContainer cursorLabel={(datum) => `${round(datum.x, 2)}, ${round(datum.y, 2)}`} />
                        }
                        data={data.dailyPrices}
                        y={(datum: TStockPriceVO) => datum.close} />
                    <vic.VictoryLine colorScale={["orange"]}
                        data={data.dailyPrices}
                        y={(datum) => datum.ma5} />
                    <vic.VictoryLine colorScale={["green"]}
                        data={data.dailyPrices}
                        y={(datum) => datum.ma20} />

                    <vic.VictoryCandlestick
                        data={data.dailyPrices}
                        labelComponent={<vic.VictoryTooltip />}
                        labels={priceTooltip}
                        style={{ data: { fill: (args: CallbackArgs) => args.datum.color } }}
                    />
                </vic.VictoryGroup>

                <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                    tickCount={10}
                    dependentAxis
                    style={{ grid: { stroke: "grey" } }} />
                <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                    fixLabelOverlap={true}
                    style={{ grid: { stroke: "grey" } }} />
            </vic.VictoryChart>
            <vic.VictoryChart theme={vic.VictoryTheme.material}
                scale={{ x: "time" }}
                width={640}
                height={160}
                padding={{ left: 60, bottom: 40 }}
                domainPadding={20}>
                <vic.VictoryBar
                    barRatio={0.9}
                    labelComponent={<vic.VictoryTooltip />}
                    labels={turnoverTooltip}
                    style={{ data: { fill: (args: CallbackArgs) => args.datum.color } }}
                    data={data.dailyPrices}
                    y={(datum) => datum.turnover} />
                <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                    fixLabelOverlap={true}
                    style={{ grid: { stroke: "grey" } }} />
                <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                    tickCount={3}
                    dependentAxis
                    style={{ grid: { stroke: "grey" } }} />
            </vic.VictoryChart>
        </div>
    }


}