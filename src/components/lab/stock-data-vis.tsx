import React, { useMemo } from "react"
import * as vic from "victory"
import { i } from "lib/commons"

import { STOCK } from "./stocks"
import { format } from "date-fns"

export namespace STOCK_CMP {
    export function StockChart({ sds }: { sds: STOCK.SOHU_STOCK.StockData[] }): JSX.Element {

        const data = useMemo(() => {
            return sds.map(sd => ({
                x: format(sd.date, "yyyy-MM-dd"),
                open: sd.open,
                close: sd.close,
                high: sd.high,
                low: sd.low,
            }))
        }, [sds])

        return <vic.VictoryChart theme={vic.VictoryTheme.grayscale} domainPadding={20}>
            <vic.VictoryCandlestick labelComponent={<vic.VictoryTooltip />}
                data={data}
                style={{ data: { fill: "tomato", width: 8 } }} />
        </vic.VictoryChart>
    }
}