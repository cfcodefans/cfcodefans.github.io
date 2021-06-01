// import { Breadcrumbs, makeStyles, Slider } from "@material-ui/core"
import { format, startOfDay, startOfMonth } from "date-fns"
import { compare, DateUnit, diffDate, i, ISO_DATE_FMT, jsf, span, yesterday } from "lib/commons"
import _ from "lodash"
import Link from "next/link"
import React, { useEffect, useMemo, useState } from "react"
import { ResizeEnable, Rnd } from "react-rnd"
import { _jsonp } from "./utils"

export default function NavBreadCrumbs({ _path }: { _path: string }): JSX.Element {
    return <nav aria-label="breadcrumb">
        <ol className="breadcrumb">{
            _path.split("/")
                .filter(part => part.length > 0)
                .map((part: string, i: number, parts: string[]) =>
                (<li key={i}
                    className={`breadcrumb-item ${i == parts.length ? "active" : ""}`}
                    aria-current={`${i == parts.length ? "page" : "false"}`}>
                    <Link href={"/" + parts.slice(0, i + 1).join("/")}>
                        {part}
                    </Link>
                </li>))
        }</ol>
    </nav>
}

const FILE_NAME: string = "gadgets.tsx"

export function SimpleInsp({ obj }: { obj: any }): JSX.Element {
    if (!obj) return <>null</>

    return <dl className="container row row-cols-2">{
        _.toPairs(obj)
            .sort((p1: [string, unknown], p2: [string, unknown]) => compare(p1[0], p2[0]))
            .map((pair: [string, unknown], i: number) => <>
                <dt key={pair[0]} className="col">{pair[0]}</dt>
                <dd key={pair[0] + "-" + i} className="col">{pair[1]}</dd>
            </>)
    }</dl>
}

export type DataLoaderProps<P, T> = { params: P, loader: (P) => Promise<T>, renderCmp: React.FC<T>, fallbackCmp: React.FC }
export function DataLoaderTempl<P, T>({ params, loader, renderCmp, fallbackCmp }: DataLoaderProps<P, T>): JSX.Element {
    const [paramState, setParamState] = useState(params)
    const [respState, setRespState] = useState({ state: "loading", resp: null })

    i(FILE_NAME, "DataLoaderTempl", paramState)

    // useEffect(() => setParamState({ params }), [params])

    useEffect(() => {
        i(FILE_NAME, "DataLoaderTempl.useEffect", paramState)
        loader(paramState)
            .then(resp => {
                return setRespState({ state: "done", resp })
            }).catch(reason => {
                return setRespState({ state: "failed", resp: reason })
            })
    }, [params])

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

export function RangeSelect({ start, end, orientation, marks = [], onRangeChange, ...rest }: {
    start: number,
    end: number,
    orientation: "vertical" | "horizontal",
    onRangeChange: (start: number, end: number) => void,
    marks: Mark[],
}): JSX.Element {

    const [range, setRange] = useState({ start, length: end - start })
    const isVertical: boolean = orientation === "vertical"

    const enabledSides: ResizeEnable = useMemo((): ResizeEnable => {
        return {
            top: isVertical,
            bottom: isVertical,
            right: !isVertical,
            left: isVertical,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
        }
    }, [orientation])

    return <Rnd
        default={{ x: 10, y: 10, height: rest["height"], width: rest["width"] }}
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderLeft: "solid 5px #ddd",
            borderRight: "solid 5px #ddd",
            borderTop: "solid 1px #ddd",
            borderBottom: "solid 1px #ddd",
            background: "#f0f0f0",
            height: "100%",
        }}
        onDragStop={(e, d) => {
            const start: number = isVertical ? d.x : d.y
            setRange({ start, length: range.length })
            _.isFunction(onRangeChange) && onRangeChange(start, start + range.length)
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
            const start: number = isVertical ? position.x : position.y
            const length: number = isVertical ? ref.clientHeight : ref.clientWidth
            setRange({ start, length })
            _.isFunction(onRangeChange) && onRangeChange(start, start + range.length)
        }}
        enableResizing={enabledSides} >
    </Rnd>
}

// ref_v: React.MutableRefObject<Range<Date>>
export function DateRangeSlide({ start, end, stepDay, onRangeChange }: {
    start: Date
    end: Date
    stepDay: number
    onRangeChange?: (d1: Date, d2: Date) => void
}): JSX.Element {
    const now: Date = new Date

    const maxDate: Date = _.maxBy([start, end], (d: Date) => d.getTime()) || yesterday()
    const max: number = startOfDay(maxDate).getTime()
    const minDate: Date = _.minBy([start, end], (d: Date) => d.getTime()) || startOfMonth(now)
    const min: number = startOfDay(minDate).getTime()

    const [value, setValue] = useState([min, max])
    const step: number = stepDay * 86400 * 1000

    let marks: Mark[] = useMemo(
        () => genDateMarks(start, end),
        [[start, end]])

    const handleChange = (event: any, newValue: number | number[]) => {
        const values: number[] = newValue as number[]
        const [v1, v2] = values
        if (v1 < v2) setValue(values)
    }

    return <div className="bg-info d-flex justify-content-between" style={{ height: "40px", width: "800px" }}>
        {!_.isEmpty(marks) && marks.map(mark => mark.label)}

    </div>
    //aria-labelledby="range-slider"
    // getAriaValueText={valuetext}
    // return (<Slider
    //     onChangeCommitted={(ev, newRange: number[]) => {
    //         onRangeChange && onRangeChange(new Date(newRange[0]), new Date(newRange[1]))
    //     }}
    //     defaultValue={[min, max]}
    //     step={step} marks={marks}
    //     min={min}
    //     max={max}
    //     value={value}
    //     onChange={handleChange}
    //     valueLabelDisplay="on"
    //     valueLabelFormat={(value, index) => format(new Date(value), "MM-dd")}
    // />)
}

export type Mark = { value: number, label?: React.ReactNode }

export function genDateMarks(start: Date, end: Date, step: DateUnit = "month"): Mark[] {
    const diff: number = diffDate(start, end, step)
    return span(start, end, step).map((d, i, arr) => {
        let label: string = `${step}`
        let fmt: string = "MM-dd"

        if (step === "year") {
            let month: number = d.getUTCMonth()
            if (month !== 1 && month !== 6) return null
            fmt = ISO_DATE_FMT
        } else if (step === "month") {
            if (i == 0 || i == arr.length - 1) fmt = ISO_DATE_FMT
            else fmt = "MM-dd"
        }

        return { value: d.getTime(), label: <i>{format(d, fmt)}</i> }
    }).filter(m => m)
}

export function Gauge({ marks }: { marks: Mark[] }): JSX.Element {
    return (<div className="w-100 d-flex justify-content-between">{
        marks.map((m, i) => <i key={i}>{m.label || "_"}</i>)
    }</div>)
}

export function Spinner({ type = "grow", size = "md", caption = "loading..." }: { caption?: string, size?: string, type?: "grow" | "border" }): JSX.Element {
    return <div className={`spinner-${type} spinner-${type}-${size}`} role="status">
        <span className="visually-hidden">{caption}</span>
    </div>
}