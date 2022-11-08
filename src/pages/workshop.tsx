import { useProperVisRect } from "components/algo-ds-vis/vis-utils"
import { CSSProperties, useState } from "react"
import { useMedia } from "react-use"
import { ScatterSymbolType, VictoryAxis, VictoryChart, VictoryScatter, VictoryTickStyleObject } from "victory"
const FILE_NAME: string = "workshop.tsx"

const _grid: CSSProperties = { stroke: "lightgrey", strokeWidth: 1 }
const _tick: VictoryTickStyleObject = { stroke: "black", strokeWidth: 1, size: 5 }

declare type TScatterData = {
    x: number
    y: number
    label?: string
    symbol?: ScatterSymbolType
}

function ScatterGen(): JSX.Element {
    let measureRect = useProperVisRect(4 / 3.0)
    let { width, height } = measureRect
    let orientation = useMedia("(orientation: portrait)")

    let [scatter, setScatter] = useState([])

    return <div className="d-block bg-light rounded" style={{ width: `${width}px`, height: `${height}px` }}  >
        <VictoryChart width={width} height={height}>
            <VictoryAxis
                standalone={false}
                width={width} height={1}
                label="whatever X"
                domain={[0, width / 30]}
                label="whatever x" 
                tickCount={width / 30}
                style={{ ticks: _tick, grid: _grid }}
                orientation="bottom" />

            <VictoryAxis
                dependentAxis={true}
                standalone={false}
                width={1} height={width}
                label="whatever Y"
                domain={[0, height / 30]}
                label="whatever y"
                tickCount={height / 30}
                style={{ ticks: _tick, grid: _grid }}
                orientation="left" />

            <VictoryScatter
                standalone={false}
                style={{ data: { fill: "#c43a31" } }}
                size={5}
                data={scatter}
            />
        </VictoryChart>
    </div>
}

export default function Workshop(): JSX.Element {
    // const classes = useStyles()
    return <ScatterGen />
}