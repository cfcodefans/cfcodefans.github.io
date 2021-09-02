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

    return <div className="d-flex flex-column w-100 h-100 white">
        {/* <svg width={100} height={100} baseProfile="fill">
            <rect x="0" y="0" width="100" height="100" fill="lightgreen" stroke="#ccc" strokeWidth="2" />            
        </svg> */}
        <DateRangeSlide start={addDate(startOfDay(startOfYesterday()), -90)}
            end={startOfYesterday()}
            stepDay={1} />
        {/* <div id="vfield" style={{
            width: 320,
            height: 480,
            backgroundColor: "lightblue",
            position: "static"
        }}>
            <RangeSelect orientation="vertical"
                start={0}
                end={100}
                marks={_.range(0, 100, 20).map(i => ({ value: i }))}
                onRangeChange={onRangeChange}
                height={480}
                width={80} />
        </div>
        <div id="hfield" style={{
            width: 480,
            height: 320,
            backgroundColor: "lightyellow",
            position: "static"
        }}>
            <RangeSelect orientation="horizontal"
                start={0}
                end={100}
                marks={_.range(0, 100, 20).map(i => ({ value: i }))}
                onRangeChange={onRangeChange}
                height={80}
                width={480} />
        </div> */}
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