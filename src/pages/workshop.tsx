import { STOCK_CMP } from "components/lab/stock-data-vis"
import { STOCK } from "components/lab/stocks"
import { format, startOfDay, startOfMonth, startOfYesterday } from "date-fns"
import { addDate, i, yesterday } from "lib/commons"
import React, { useMemo, useState } from "react"

import Typography from "@material-ui/core/Typography"
import Slider, { Mark } from "@material-ui/core/Slider"
import { makeStyles } from "@material-ui/core/styles"
import { DateRangeSlide, genDateMarks } from "components/gadgets"
import _ from "lodash"

const FILE_NAME: string = "workshop.tsx"


export default function Workshop(): JSX.Element {
    // const classes = useStyles()

    async function historySearchHandler(resp: any): Promise<STOCK.SOHU_STOCK.RawResp[]> {
        i(FILE_NAME, "JsonpDataLoader.historySearchHandler", resp)
        return Promise.resolve(resp as STOCK.SOHU_STOCK.RawResp[])
    }
    return <div className="w-100">

        <DateRangeSlide start={addDate(startOfDay(startOfYesterday()), -120)}
            end={startOfYesterday()} stepDay={1} />
        {/* <RangeSlider start={addDate(startOfDay(startOfYesterday()), -120)}
            end={startOfYesterday()} stepDay={1} /> */}
        {/*  <p>{url}</p>
                <STOCK_CMP.StockInfoPanel _code="600104"
            _start={addDate(startOfDay(startOfYesterday()), -120)}
            _end={startOfYesterday()} />
        <JsonpDataLoader url={url}
            callbackFnName={"cn_600104"}
            callbackFn={historySearchHandler}
            renderCmp={(raws: STOCK.SOHU_STOCK.RawResp[]) => {
                const [raw] = raws
                return <STOCK_CMP.StockCandleChart sds={raw.hq.map(d => STOCK.SOHU_STOCK.toTStockData(d))} />
            }}
            fallbackCmp={() => <CircularProgress animation="grow" />} /> */}
    </div>
}