import { SimpleInsp } from "components/gadgets"
import { jsf } from "lib/commons"
import React from "react"
import GEO_JSONS from "../../public/res/data/geo-country-low-resolution.geo.json"

export default function Workshop(): JSX.Element {
    const { features } = GEO_JSONS
    const [first] = features
    const { properties, geometry } = first
    return <>
        {features.length}
        <br />
        <SimpleInsp obj={properties} />
        <br />
        {jsf(geometry)}
    </>
}

