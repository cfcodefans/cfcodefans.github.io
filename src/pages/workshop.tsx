import { STOCK_CMP } from "components/lab/stock-data-vis"
import { STOCK } from "components/lab/stocks"
import { startOfDay } from "date-fns"
import { addDate, i, yesterday } from "lib/commons"
import React from "react"

const FILE_NAME: string = "workshop.tsx"


export default function Workshop(): JSX.Element {

    const foo: Function = new Function()

    async function historySearchHandler(resp: any): Promise<STOCK.SOHU_STOCK.RawResp[]> {
        i(FILE_NAME, "JsonpDataLoader.historySearchHandler", resp)
        return Promise.resolve(resp as STOCK.SOHU_STOCK.RawResp[])
    }
    const url: string = STOCK.SOHU_STOCK.mkJsonpUrlReq("cn_600104", "cn", 600104, addDate(yesterday(), -90), yesterday())

    return <div className="w-100">
        <STOCK_CMP.StockInfoPanel _code="600104" _start={addDate(startOfDay(yesterday()), -90)} _end={yesterday()} />
        {/* <p>{url}</p>
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