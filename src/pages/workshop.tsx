import { STOCK_CMP } from "components/lab/stock-data-vis"
import { STOCK } from "components/lab/stocks"
import { format, startOfDay, startOfMonth, startOfYesterday } from "date-fns"
import { addDate, i, yesterday } from "lib/commons"
import React, { useMemo, useState } from "react"

import { DateRangeSlide, genDateMarks, RangeSelect } from "components/gadgets"
import _ from "lodash"

const FILE_NAME: string = "workshop.tsx"


export default function Workshop(): JSX.Element {
    // const classes = useStyles()

    async function historySearchHandler(resp: any): Promise<STOCK.SOHU_STOCK.RawResp[]> {
        i(FILE_NAME, "JsonpDataLoader.historySearchHandler", resp)
        return Promise.resolve(resp as STOCK.SOHU_STOCK.RawResp[])
    }

    function onRangeChange(start: number, end: number) {

    }

    return <div className="w-100 h-100 white">

        {/* <DateRangeSlide start={addDate(startOfDay(startOfYesterday()), -240)} end={startOfYesterday()} stepDay={1} /> */}
        <div id="field" style={{
            width: 640,
            height: 480,
            backgroundColor: "lightblue",
            position: "absolute"
        }}>
            <RangeSelect orientation="vertical"
                start={0}
                end={100}
                marks={_.range(0, 100, 20).map(i => ({ value: i }))}
                onRangeChange={onRangeChange}
                height={480}
                width={80} />
        </div>
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