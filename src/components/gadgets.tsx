import { compare, i, jsf } from "lib/commons"
import _ from "lodash"
import React, { useEffect, useState } from "react"
import { _jsonp } from "./utils"

const FILE_NAME: string = "gadgets.tsx"

export function SimpleInsp({ obj }: { obj: any }): JSX.Element {
    if (!obj) return <>null</>

    return <dl className="container row row-cols-2">
        {_.toPairs(obj)
            .sort((p1: [string, unknown], p2: [string, unknown]) => compare(p1[0], p2[0]))
            .map((pair: [string, unknown], i: number) => <>
                <dt key={pair[0]} className="col">{pair[0]}</dt>
                <dd key={pair[0] + "-" + i} className="col">{pair[1]}</dd>
            </>)}
    </dl>
}

export function DataLoaderTempl<P, T>({ params, loader, renderCmp, fallbackCmp }: { params: P, loader: (P) => Promise<T>, renderCmp: React.FC<T>, fallbackCmp: React.FC }): JSX.Element {
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

export function UrlDataLoader({ url, renderCmp, fallbackCmp }: { url: string, renderCmp: React.FC<any>, fallbackCmp: React.FC }): JSX.Element {
    i(FILE_NAME, "UrlDataLoader", url)
    const loader = (p: string) => {
        i(FILE_NAME, "loader", p)
        return fetch(url, { method: "GET" }).then(resp => resp.json)
    }

    return <DataLoaderTempl params={url}
        loader={loader}
        renderCmp={renderCmp}
        fallbackCmp={fallbackCmp} />
}

export function JsonpDataLoader({ url, callbackFnName, callbackFn, renderCmp, fallbackCmp }: { url: string, callbackFnName: string, callbackFn: Function, renderCmp: React.FC<any>, fallbackCmp: React.FC }): JSX.Element {
    i(FILE_NAME, "JsonpDataLoader", url)

    const jsonpLoader = (p: string) => {
        i(FILE_NAME, "loader", p)
        return _jsonp(url, "jsonp_" + callbackFnName, callbackFnName, callbackFn)
    }

    return <DataLoaderTempl params={url}
        loader={jsonpLoader}
        renderCmp={renderCmp}
        fallbackCmp={fallbackCmp} />
}