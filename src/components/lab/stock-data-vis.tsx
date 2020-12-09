import { format } from "date-fns"
import React, { useMemo } from "react"
import * as vic from "victory"
import { CallbackArgs } from "victory-core"
import { STOCK } from "./stocks"

type TStockDataVO = {
    x: string
    y?: number
    open: number
    close: number
    low: number
    high: number
    color: string
}

export namespace STOCK_CMP {
    function tooltip({ datum }: { datum: STOCK.SOHU_STOCK.TStockData }): string[] {
        return [`open: ${datum.open}`, `high: ${datum.high}`, `low: ${datum.low}`, `close: ${datum.close}`]
    }

    export function StockCandleChart({ sds }: { sds: STOCK.SOHU_STOCK.TStockData[] }): JSX.Element {

        const data: TStockDataVO[] = useMemo(() => {
            return sds.map(sd => ({
                x: format(sd.date, "MM-dd"),
                open: sd.open,
                close: sd.close,
                high: sd.high,
                low: sd.low,
                color: sd.close > sd.open ? "red" : "green"
            }))
        }, [sds])

        return <vic.VictoryChart theme={vic.VictoryTheme.material}
            scale={{ x: "time" }}
            style={{ background: { fill: "white" } }}
            height={600}
            width={800}
            domainPadding={20}>

            <vic.VictoryGroup colorScale={["green", "red"]}>
                <vic.VictoryCandlestick
                    data={data}
                    labelComponent={<vic.VictoryTooltip />}
                    labels={tooltip}
                    style={{ data: { fill: (args: CallbackArgs) => args.datum.color } }}
                />
            </vic.VictoryGroup>

            <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                fixLabelOverlap={true}
                style={{ grid: { stroke: "grey" } }} />

            <vic.VictoryAxis gridComponent={<vic.LineSegment />}
                tickCount={10}
                dependentAxis
                style={{ grid: { stroke: "grey" } }} />

        </vic.VictoryChart>
    }
}