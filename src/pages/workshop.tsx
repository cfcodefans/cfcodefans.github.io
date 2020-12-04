import { SimpleInsp } from "components/gadgets"
import { _iframe, _jsonp } from "components/utils"
import { i, jsf } from "lib/commons"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { Spinner } from "react-bootstrap"
import { STOCK } from "components/lab/stocks"
import { STOCK_CMP } from "components/lab/stock-data-vis"
import GEO_JSONS from "../../public/res/data/geo-country-low-resolution.geo.json"

const FILE_NAME: string = "workshop.tsx"


export default function Workshop(): JSX.Element {
    // const url: string = "http://money.finance.sina.com.cn/quotes_service/api/json_v2.php/CN_MarketData.getKLineData?symbol=sh601006&scale=60&ma=no&datalen=10"
    const url: string = "https://q.stock.sohu.com/hisHq?code=cn_600104&start=20191110&end=20191111&stat=1&order=D&period=d&callback=historySearchHandler&rt=jsonp"
    // window["historySearchHandler"] = (resp) => i(FILE_NAME, "historySearchHandler", resp)

    async function historySearchHandler(resp: any): Promise<STOCK.SOHU_STOCK.RawResp[]> {
        i(FILE_NAME, "JsonpDataLoader.historySearchHandler", resp)
        return Promise.resolve(resp as STOCK.SOHU_STOCK.RawResp[])
    }

    return <div>
        <p>{url}</p>
        <JsonpDataLoader url={url}
            callbackFn={historySearchHandler}
            renderCmp={(raws: STOCK.SOHU_STOCK.RawResp[]) => {
                const [raw] = raws
                return <pre>
                    {jsf(raw.hq.map(d => STOCK.SOHU_STOCK.StockData.make(d)))}
                </pre>
            }}
            fallbackCmp={() => <Spinner animation="grow" />} />
    </div>
}

function DataLoaderTempl<P, T>({ params, loader, renderCmp, fallbackCmp }: { params: P, loader: (P) => Promise<T>, renderCmp: React.FC<T>, fallbackCmp: React.FC }): JSX.Element {
    const [paramState, setParamState] = useState(null)
    const [respState, setRespState] = useState({ state: "loading", resp: null })

    i(FILE_NAME, "DataLoaderTempl", respState, paramState)

    // useEffect(() => setParamState({ params }), [params])

    useEffect(
        () => {
            i(FILE_NAME, "DataLoaderTempl.useEffect", params)
            loader(params)
                .then(resp => {
                    i(FILE_NAME, "useEffect", "resp", resp)
                    return setRespState({ state: "done", resp })
                }).catch(reason => {
                    i(FILE_NAME, "useEffect", "reason", reason)
                    return setRespState({ state: "failed", resp: reason })
                })
        },
        [])
    // memorizedData.then(resp => setRespState({ state: "done", resp }))
    //     .catch(reason => setRespState({ state: "failed", resp: reason }))

    if (respState.state == "loading") return fallbackCmp({})
    if (respState.state == "failed")
        return <pre>failed to load data with &nbsp;
            {jsf(params)} &nbsp;
        for {jsf(respState.resp)}</pre>
    return renderCmp(respState.resp)
}

function UrlDataLoader({ url, renderCmp, fallbackCmp }: { url: string, renderCmp: React.FC<any>, fallbackCmp: React.FC }): JSX.Element {
    i(FILE_NAME, "UrlDataLoader", url)
    const loader = (p: string) => {
        i(FILE_NAME, "loader", p)
        return fetch(url, { method: "GET" }).then(resp => resp.json)
        // return _jsonp(url, "jsonp1")
    }

    return <DataLoaderTempl params={url}
        loader={loader}
        renderCmp={renderCmp}
        fallbackCmp={fallbackCmp} />
}

function JsonpDataLoader({ url, callbackFn, renderCmp, fallbackCmp }: { url: string, callbackFn: Function, renderCmp: React.FC<any>, fallbackCmp: React.FC }): JSX.Element {
    i(FILE_NAME, "JsonpDataLoader", url)

    const jsonpLoader = (p: string) => {
        i(FILE_NAME, "loader", p)
        return _jsonp(url, "jsonp1", callbackFn)
    }

    return <DataLoaderTempl params={url}
        loader={jsonpLoader}
        renderCmp={renderCmp}
        fallbackCmp={fallbackCmp} />
}   
