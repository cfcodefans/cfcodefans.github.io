import React from "react"
import PageFrame from "../components/page_frame"
import { useSiteData, useRouteData,useBasepath } from 'react-static';

export default () => {
    let siteData: any = useSiteData()
    let routeData: any = useRouteData()
    return (<PageFrame>
        <h1>Blog list</h1>
        useBasepath:{useBasepath()}
        <h2>routeData</h2>
        <pre>
            {JSON.stringify(routeData, null, "  ")}
        </pre>
    </PageFrame>)
}