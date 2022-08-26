// import { Breadcrumbs, makeStyles, Slider } from "@material-ui/core"
import { addDays, differenceInDays, format, startOfMonth } from "date-fns"
import { compare, DateUnit, diffDate, i, ISO_DATE_FMT, jsf, span, yesterday } from "lib/commons"
import _ from "lodash"
import Link from "next/link"
import React, { CSSProperties, useEffect, useMemo, useState } from "react"
import { Breadcrumb } from "react-bootstrap"
import { HandleComponent, ResizeEnable, Rnd } from "react-rnd"
import { useMeasure } from "react-use"
import { _jsonp } from "./utils"

export default function NavBreadCrumbs({ _path }: { _path: string }): JSX.Element {
    return <Breadcrumb className="fw-bold fs-4 opacity-75 bg-white">{
        _path.split("/")
            .filter(part => part.length > 0)
            .map((part: string, i: number, parts: string[]) =>
            (<Breadcrumb.Item key={i} active={i == parts.length - 1} >
                <Link href={"/" + parts.slice(0, i + 1).join("/")}><a className="text-decoration-none">{part}</a></Link>
            </Breadcrumb.Item>))
    }</Breadcrumb>
}

const FILE_NAME: string = "gadgets.tsx"

export function SimpleInsp({ obj }: { obj: any }): JSX.Element {
    if (!obj) return <>null</>

    return <dl className="container row row-cols-2">{
        _.toPairs(obj)
            .sort((p1: [string, unknown], p2: [string, unknown]) => compare(p1[0], p2[0]))
            .map((pair: [string, unknown], i: number) => <>
                <dt key={pair[0]} className="col">{pair[0]}</dt>
                <dd key={pair[0] + "-" + i} className="col">{JSON.stringify(pair[1])}</dd>
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


const BORDER_HANDLER: string = "solid 1px #33b5e5"
const BORDER_NO_HANDLER: string = "solid 1px #33b5e5"
const RESIZE_HANDLER_CMP_CSS: string = "badge-pill badge-info rnd-handler-cmp p-1 rounded-5 bg-primary text-white"

export function RangeSelect({ start,
    end,
    orientation = "horizontal",
    onRangeChange,
    onRangeChanged,
    children,
    render = (v) => v, ...rest }: {
        start: number,
        end: number,
        orientation: "vertical" | "horizontal",
        onRangeChange: (start: number, end: number) => void,
        onRangeChanged: (start: number, end: number) => void,
        children?: React.ReactNode,
        render?: (value: number) => any
    } | Record<string | number | symbol, any>): JSX.Element {

    const [range, setRange] = useState({ start, length: end - start })
    const isVertical: boolean = orientation === "vertical"

    const enabledSides: ResizeEnable = useMemo((): ResizeEnable => {
        return {
            top: isVertical,
            bottom: isVertical,
            right: !isVertical,
            left: !isVertical,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
        }
    }, [orientation])

    const style: CSSProperties = useMemo((): CSSProperties => {
        return {
            borderRadius: "8px",
            borderLeft: !isVertical ? BORDER_HANDLER : BORDER_NO_HANDLER,
            borderRight: !isVertical ? BORDER_HANDLER : BORDER_NO_HANDLER,
            borderTop: isVertical ? BORDER_HANDLER : BORDER_NO_HANDLER,
            borderBottom: isVertical ? BORDER_HANDLER : BORDER_NO_HANDLER,
            backgroundColor: "transparent",
            height: "100%",
        }
    }, [orientation])

    const resizeHandlerCmps: HandleComponent = isVertical
        ? {
            top: <i className={RESIZE_HANDLER_CMP_CSS}>{render && render(range.start)}</i>,
            bottom: <i className={RESIZE_HANDLER_CMP_CSS}>{render && render(range.start + range.length)}</i>
        }
        : {
            left: <i className={RESIZE_HANDLER_CMP_CSS}>{render && render(range.start)}</i>,
            right: <i className={RESIZE_HANDLER_CMP_CSS}>{render && render(range.start + range.length)}</i>
        }
    // }, [orientation])

    const height: number = rest["height"]
    const width: number = rest["width"]

    return <div style={{
        position: "absolute",
        backgroundColor: "transparent",
        height,
        width
    }}> <Rnd
        maxHeight={height}
        maxWidth={width}
        bounds="parent"
        default={{ x: Math.max(0, Math.min(range.start, width - 100)), y: 0, height: rest["height"], width: Math.min(rest["width"], range.length) }}
        style={style}
        resizeHandleComponent={resizeHandlerCmps}
        onDrag={(e, d) => {
            const start: number = Math.round(isVertical ? d.y : d.x)
            setRange({ start, length: range.length })
            _.isFunction(onRangeChange) && onRangeChange(start, start + range.length)
        }}
        onDragStop={(e, d) => {
            const start: number = Math.round(isVertical ? d.y : d.x)
            setRange({ start, length: range.length })
            _.isFunction(onRangeChanged) && onRangeChanged(start, start + range.length)
        }}
        onResize={(e, direction, ref, delta, position) => {
            const start: number = Math.round(isVertical ? position.y : position.x)
            const length: number = Math.round(isVertical ? ref.clientHeight : ref.clientWidth)
            setRange({ start, length })
            _.isFunction(onRangeChange) && onRangeChange(start, start + range.length)
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
            const start: number = Math.round(isVertical ? position.y : position.x)
            const length: number = Math.round(isVertical ? ref.clientHeight : ref.clientWidth)
            setRange({ start, length })
            _.isFunction(onRangeChanged) && onRangeChanged(start, start + range.length)
        }}
        dragAxis={!isVertical ? "x" : "y"}
        enableResizing={enabledSides} {...rest}>
            {children}
        </Rnd>
    </div>
}

export function DateRangeSlide({ start, end, min, max, stepDay, onDateRangeChange, onDateRangeChanged }: {
    start: Date
    end: Date
    min: Date
    max: Date
    stepDay: number
    onDateRangeChange?: (d1: Date, d2: Date) => void
    onDateRangeChanged?: (d1: Date, d2: Date) => void
}): JSX.Element {
    const now: Date = new Date

    const [maxDate, minDate, days] = useMemo(() => {
        const maxDate: Date = _.maxBy([min, max], (d: Date) => d.getTime()) || yesterday()
        const minDate: Date = _.minBy([min, max], (d: Date) => d.getTime()) || startOfMonth(now)
        const days: number = differenceInDays(maxDate, minDate)
        return [maxDate, minDate, days]
    }, [min, max])

    const [range, setRange] = useState({ start, end })

    let marks: Mark[] = useMemo(
        () => genDateMarks(min, max),
        [[min, max]])

    const [containerRef, { height, width }] = useMeasure()
    const containerHeight: number = Math.round(height)
    const containerWidth: number = Math.round(width)

    function mapper(v: number, width: number): Date {
        return addDays(minDate, Math.round(v / width * days) + 1)
    }
    function _mapper(d: Date, width: number): number {
        return differenceInDays(d, minDate) / days * width
    }


    return <div
        className="position-relative"
        style={{ height: "100%", width: "100%", backgroundColor: "transparent" }}
        ref={containerRef}>

        {containerHeight > 0 && containerWidth > 0 &&
            <div className="position-absolute" style={{ zIndex: 100, width: containerWidth, height: containerHeight }}>
                <RangeSelect orientation="horizontal"
                    start={_mapper(start, containerWidth)}
                    end={_mapper(end, containerWidth)}
                    onRangeChange={(v1: number, v2: number) => {
                        const d1: Date = mapper(v1, containerWidth)
                        const d2: Date = mapper(v2, containerWidth)
                        setRange({ start: d1, end: d2 })
                        _.isFunction(onDateRangeChange) && onDateRangeChange(d1, d2)
                    }}
                    onRangeChanged={(v1: number, v2: number) => {
                        const d1: Date = mapper(v1, containerWidth)
                        const d2: Date = mapper(v2, containerWidth)
                        _.isFunction(onDateRangeChanged) && onDateRangeChanged(d1, d2)
                    }}
                    render={(v: number) => mapper(v, containerWidth)?.toISOString()?.substring(0, 10)}
                    height={containerHeight}
                    width={containerWidth} >
                    <i className="rnd-handler-cmp bg-info bg-opacity-25">{differenceInDays(range.end, range.start)} days</i>
                </RangeSelect>
            </div>}
        <div className="d-flex justify-content-between">
            {!_.isEmpty(marks) && marks.map(mark => mark.label)}
        </div>
    </div>
}

export type Mark = { value: number, label?: React.ReactNode }

export function genDateMarks(start: Date, end: Date, step: DateUnit = "month"): Mark[] {
    const diff: number = diffDate(start, end, step)
    return span(start, end, step).map((d, i, arr) => {
        let label: string = `${step}`
        let fmt: string = "MM-dd"

        let month: number = d.getUTCMonth()
        if (step === "year") {
            if (month !== 1 && month !== 6) return null
            fmt = ISO_DATE_FMT
        } else if (step === "month") {
            if (i == 0 || i == arr.length - 1 || month === 0)
                fmt = ISO_DATE_FMT
            else fmt = "MM-dd"
        }

        return { value: d.getTime(), label: <i key={i}>{format(d, fmt)}</i> }
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
