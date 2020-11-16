import React from "react"
import { letterFrequency } from "@visx/mock-data"
import { Group } from "@visx/group"
import { Bar } from "@visx/shape"
import { scaleLinear, scaleBand } from "@visx/scale"
import { LetterFrequency } from "@visx/mock-data/lib/mocks/letterFrequency"

const data = letterFrequency
const width = 500
const height = 500
const margin = { top: 20, left: 20, bottom: 20, right: 20 }

// Then we'll create some bounds
const xMax = width - margin.left - margin.right
const yMax = height - margin.top - margin.bottom

// We'll make some helpers to get at the data we want
const x = (d: LetterFrequency) => d.letter
const y = (d: LetterFrequency) => +d.frequency * 100

// And then scale the graph by our data
const xScale = scaleBand({
    range: [0, xMax],
    round: true,
    domain: data.map(x),
    padding: 0.4,
})
const yScale = scaleLinear({
    range: [yMax, 0],
    round: true,
    domain: [0, Math.max(...data.map(y))],
})

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data))
const xPoint = compose(xScale, x)
const yPoint = compose(yScale, y)

// Finally we'll embed it all in an SVG
export default function VisxTests_BarGraph(props): JSX.Element {
    return <svg width={width} height={height}>
        {data.map((d, i) => {
            const barHeight = yMax - yPoint(d)
            return <Group key={`bar-${i}`}>
                <Bar x={xPoint(d)}
                    y={yMax - barHeight}
                    height={barHeight}
                    width={xScale.bandwidth()}
                    fill="#fc2e1c"
                />
            </Group>
        })}
    </svg>
}