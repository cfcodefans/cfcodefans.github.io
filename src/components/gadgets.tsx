import { compare } from "lib/commons"
import _ from "lodash"
import React from "react"

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