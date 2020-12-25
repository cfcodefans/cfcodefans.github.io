import { Slider } from "@material-ui/core"
import { format, startOfDay, startOfMonth } from "date-fns"
import { compare, DateUnit, diffDate, i, ISO_DATE_FMT, jsf, span, yesterday } from "lib/commons"
import _ from "lodash"
import React, { useEffect, useMemo, useState } from "react"
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
    const [paramState, setParamState] = useState(params)
    const [respState, setRespState] = useState({ state: "loading", resp: null })

    i(FILE_NAME, "DataLoaderTempl", paramState)

    // useEffect(() => setParamState({ params }), [params])

    useEffect(
        () => {
            i(FILE_NAME, "DataLoaderTempl.useEffect", paramState)
            loader(paramState)
                .then(resp => {
                    return setRespState({ state: "done", resp })
                }).catch(reason => {
                    return setRespState({ state: "failed", resp: reason })
                })
        },
        [params])

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

function xByPercent(el: HTMLElement, percent: number): string {
    return el ? Math.round(el.clientWidth * percent / 100) + "px" : percent + "%"
}

export function DateRangeSlide({ start, end, stepDay, onRangeChange }: {
    // ref_v: React.MutableRefObject<Range<Date>>
    onRangeChange: (d1: Date, d2: Date) => void
    start: Date
    end: Date
    stepDay: number
}): JSX.Element {
    const now: Date = new Date

    const maxDate: Date = _.maxBy([start, end], (d: Date) => d.getTime()) || yesterday()
    const max: number = startOfDay(maxDate).getTime()
    const minDate: Date = _.minBy([start, end], (d: Date) => d.getTime()) || startOfMonth(now)
    const min: number = startOfDay(minDate).getTime()

    const step: number = stepDay * 86400 * 1000
    // const baseRange = { _1: minDate, _2: maxDate }
    const [range, setRange] = useState([min, max])

    let marks: Mark[] = useMemo(() => span(start, end, "month").map((d, i, arr) => ({ value: d.getTime(), label: format(d,  "MM-dd") })), //(i == 0 || i == arr.length - 1) ? ISO_DATE_FMT :
        [[start, end]])

    // useEffect(() => {
    //     ref_v.current = { _1: new Date(range[0]), _2: new Date(range[1]) }
    //     i(FILE_NAME, "DateRangeSlide.useEffect", "range", range)
    // }, [range])

    i(FILE_NAME, "DateRangeSlide.render", "range", range)

    return <div className="w-100 pt-4 px-4 ">
        <Slider defaultValue={[min, max]}
            onChangeCommitted={(ev, newRange: number[]) => {
                setRange(newRange)
                onRangeChange && onRangeChange(new Date(newRange[0]), new Date(newRange[1]))
            }}

            valueLabelFormat={(value, index) => format(new Date(value), "MM-dd")}

            value={range}
            min={min}
            max={max}
            step={step}
            marks={marks}
            valueLabelDisplay="on" />
    </div>

    // return (<div className="w-100 d-flex flex-column">

    //     <div id="infoPane" ref={infoPaneRef} className="w-100 position-relative" style={{ height: "2rem" }}>
    //         <div className="position-absolute"
    //             style={{ zIndex: 1, left: `${xByPercent(infoPaneRef.current, d_calcPercent(baseRange, range._1))}` }}>
    //             <i className="text-nowrap" style={{ marginLeft: "-40px" }}>{format(range._1, ISO_DATE_FMT)}</i>
    //         </div>
    //         <div className="position-absolute"
    //             style={{ zIndex: 1, left: `${xByPercent(infoPaneRef.current, d_calcPercent(baseRange, range._2))}` }}>
    //             <i className="text-nowrap" style={{ marginLeft: "-40px" }}>{format(range._2, ISO_DATE_FMT)}</i>
    //         </div>
    //     </div>

    //     <div className="w-100 position-relative multi-range">
    //         <input className="w-100 position-absolute"
    //             type="range"
    //             min={min}
    //             max={max}
    //             step={step}
    //             value={range._1.getTime()}
    //             onChange={e => {
    //                 const newValue = parseInt(e.currentTarget.value)
    //                 if (newValue + step <= range._2.getTime()) {
    //                     setRange({ ...range, _1: new Date(newValue) })
    //                 }
    //             }}
    //         />
    //         <input className="w-100 position-absolute"
    //             type="range"
    //             min={min}
    //             max={max}
    //             step={step}
    //             value={range._2.getTime()}
    //             onChange={e => {
    //                 const newValue = parseInt(e.currentTarget.value)
    //                 if (newValue - step >= range._1.getTime()) {
    //                     setRange({ ...range, _2: new Date(newValue) })
    //                 }
    //             }}
    //         />
    //     </div>
    //     <Gauge marks={genDateMarks(start, end, "month")} />
    //     <div className="d-flex justify-content-between">
    //         <input type="hidden" name="start_date" value={format(range._1, ISO_DATE_FMT)} />
    //         <input type="hidden" name="end_date" value={format(range._2, ISO_DATE_FMT)} />
    //     </div>
    // </div>)
}

export type Mark = { value: number, label?: string }

export function genDateMarks(start: Date, end: Date, step: DateUnit = "month"): Mark[] {
    const diff: number = diffDate(start, end, step)
    return span(start, end, step).map((d, i, arr) => {
        let month: number = d.getUTCMonth()
        let label: string = `${step}`

        if (step === "year") {
            if (month !== 1 && month !== 6) return null
            label = format(d, ISO_DATE_FMT)
        } else if (step === "month") {
            // if (month !== 1 && month !== 3 && month !== 6 && month !== 9) return null
            if (i == 0) label = format(d, ISO_DATE_FMT)
            else if (i == arr.length - 1) label = format(d, ISO_DATE_FMT)
            else label = format(d, "MM-dd")
        }

        return { value: i, label }
    }).filter(m => m)
}

export function Gauge({ marks }: { marks: Mark[] }): JSX.Element {
    return (<div className="w-100 d-flex  justify-content-between">
        {marks.map((m, i) => <i key={i}>{m.label || "_"}</i>)}
    </div>)
}