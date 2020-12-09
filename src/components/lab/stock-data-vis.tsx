import { format } from "date-fns"
import React, { useMemo } from "react"
import * as vic from "victory"
import { STOCK } from "./stocks"

export namespace STOCK_CMP {
    function tooltip({ datum }: { datum: STOCK.SOHU_STOCK.TStockData }): string[] {
        return [`open: ${datum.open}`, `high: ${datum.high}`, `low: ${datum.low}`, `close: ${datum.close}`]
    }

    export function StockCandleChart({ sds }: { sds: STOCK.SOHU_STOCK.TStockData[] }): JSX.Element {

        const data = useMemo(() => {
            return sds.map(sd => ({
                x: format(sd.date, "MM-dd"),
                open: sd.open,
                close: sd.close,
                high: sd.high,
                low: sd.low,
            }))
        }, [sds])

        return <vic.VictoryChart theme={vic.VictoryTheme.material}
            scale={{ x: "time" }}
            style={{ background: { fill: "white" } }}
            height={600}
            width={800}
            domainPadding={20}>

            <vic.VictoryCandlestick
                data={data}
                labelComponent={<vic.VictoryTooltip />}
                labels={tooltip}
                candleColors={{ positive: "red", negative: "green" }}
            />

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