import React from "react"
import PageFrame from "../components/page_frame"
import { useSiteData, useRouteData, useBasepath } from "react-static"
import MDX from "@mdx-js/runtime"

export type MarkdownMetaInfo = { excerpt: string, meta: any, path: string }

const BlogItem: React.FC<MarkdownMetaInfo> = (props: MarkdownMetaInfo) => {
    let excerpt: string = props.excerpt
    return (<div>
        <MDX>{excerpt}</MDX>
    </div>)
}

export default () => {
    let siteData: any = useSiteData()
    let routeData: MarkdownMetaInfo[] = Object.values(useRouteData()) as MarkdownMetaInfo[]

    /**
     * <h1>Blog list</h1>
        useBasepath:{useBasepath()}
        <h2>routeData</h2>
        <pre>
            {JSON.stringify(routeData, null, "  ")}
        </pre>
     */
    return (<PageFrame>
        <div className="w-100 d-flex flex-column">
            {routeData.map(mt => <BlogItem {...mt}></BlogItem>)}
            <hr />
        </div>
    </PageFrame>)
}