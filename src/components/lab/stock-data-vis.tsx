import { format } from "date-fns"
import { compare } from "lib/commons"
import React, { useMemo } from "react"
import * as vic from "victory"
import { CallbackArgs, CoordinatesPropType } from "victory-core"
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
            })).sort((d1, d2) => compare(d1.x, d2.x))
        }, [sds])

        return <vic.VictoryChart theme={vic.VictoryTheme.material}
            scale={{ x: "time" }}
            style={{ background: { fill: "white" } }}
            height={600}
            width={800}
            containerComponent={<vic.VictoryCursorContainer
                cursorLabel={(p: CoordinatesPropType, args: CallbackArgs) => `x: ${p}, args: ${args}`} />}
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