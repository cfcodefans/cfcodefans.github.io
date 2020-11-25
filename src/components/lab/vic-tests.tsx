import React from "react"
import * as vic from "victory"
import { i } from "lib/commons"

export type TData2d = { x: string | number, y: number, label: string }

function mock_letter_count(str: string): TData2d[] {
    const letter_counts: { [key: string]: number } = {}
    for (const char of "abcdefghijklmnopqrstuvwxyz") {
        letter_counts[char] = 0
    }
    for (const char of str.toLowerCase()) {
        if (char > "z" || char < "a") continue
        letter_counts[char] = letter_counts[char] + 1
    }
    return Object.keys(letter_counts).map(letter => ({ x: letter, y: letter_counts[letter], label: `${letter}-${letter_counts[letter]}` }))
}

export function LetterCounts({ str }: { str: string }): JSX.Element {
    const data = mock_letter_count(str)
    // i("workshop.ts", "data", data)
    return <vic.VictoryChart theme={vic.VictoryTheme.grayscale} domainPadding={20}>
        <vic.VictoryBar labelComponent={<vic.VictoryTooltip />}
            data={data}
            style={{ data: { fill: "tomato", width: 8 } }} />
    </vic.VictoryChart>
}