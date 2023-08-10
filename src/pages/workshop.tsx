import { useProperVisRect } from "components/algo-ds-vis/vis-utils"
import _ from "lodash"
import { random } from "lodash"
import { CSSProperties, useEffect, useState } from "react"
import { useMedia } from "react-use"
import { ScatterSymbolType, VictoryAxis, VictoryChart, VictoryLine, VictoryScatter, VictoryTickStyleObject } from "victory"
const FILE_NAME: string = "workshop.tsx"

const _grid: CSSProperties = { stroke: "lightgrey", strokeWidth: 1 }
const _tick: VictoryTickStyleObject = { stroke: "black", strokeWidth: 1, size: 5 }

declare type TScatterData = {
    x: number
    y: number
    label?: string
    symbol?: ScatterSymbolType
}

function mkDataByTime(factor: number, domainHeight: number): TScatterData[] {
    // let now: Date = new Date()
    // console.info("setInterval", now.toISOString())
    // let data: number[] = [now.getFullYear() % 100, now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()]
    // return data.map((v, i) => ({ x: i, y: v }))
    // return [{ x: 0, y: data.reduce((pv, cv) => pv + cv, 0) / data.length }]
    return [{ x: 0, y: random(0, domainHeight / 4, false) + domainHeight / 4 }]
}

function ScatterGen(): JSX.Element {
    let measureRect = useProperVisRect(4 / 3.0, 720)
    let { width, height } = measureRect
    console.info("ScatterGen", width, height)
    let orientation = useMedia("(orientation: portrait)")

    let [scatter, setScatter] = useState([{ x: 0, y: 0 }])

    let domainWidth: number = width / 30
    let startX: number = (_.first(scatter)?.x) ?? 0
    let endX: number = startX + domainWidth

    let interval: number = 200

    useEffect(() => {
        setInterval(() => {
            setScatter((pv) => {
                if (pv.length > domainWidth) pv.shift()
                // pv.push({ x: pv.length, y: mkDataByTime()[0].y })
                const last = _.last(pv) ?? { x: 0, y: 0 }
                return [...pv, { x: last.x + 1, y: mkDataByTime(last.x, height / 30)[0].y }]
            })
        }, interval)
    }, [])

    return <div className="d-block bg-light rounded" style={{ width: `${width}px`, height: `${height}px` }}  >
        <VictoryChart width={width} height={height}>

            <VictoryAxis
                standalone={true}
                width={width} height={1}
                label="whatever X"
                domain={[startX, endX]}
                tickCount={endX - startX}
                style={{ ticks: _tick, grid: _grid }}
                orientation="bottom" />

            <VictoryAxis
                dependentAxis={true}
                standalone={false}
                width={1} height={width}
                label="whatever Y"
                domain={[0, height / 30]}
                tickCount={height / 30}
                style={{ ticks: _tick, grid: _grid }}
                orientation="left" />

            <VictoryScatter
                standalone={false}
                style={{ data: { fill: "#c43a31" } }}
                size={5}
                animate={{ duration: interval }}
                data={scatter}
            />

            <VictoryLine
                interpolation="natural"
                standalone={false}
                style={{ data: { stroke: "#c43a31" } }}
                animate={{ duration: interval }}
                data={scatter}
            />
        </VictoryChart>
    </div>
}

export default function Workshop(): JSX.Element {
    // const classes = useStyles()
    return <ScatterGen />
}