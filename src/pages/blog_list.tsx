import React from "react"
import { Link } from "@reach/router"
import PageFrame from "../components/page_frame"
import { useSiteData, useRouteData, useBasepath } from "react-static"
import MDX from "@mdx-js/runtime"

export type MarkdownMetaInfo = { excerpt: string, meta: any, path: string }

const BlogItem: React.FC<MarkdownMetaInfo> = (props: MarkdownMetaInfo) => {
    let excerpt: string = props.excerpt
    let meta: any = props.meta
    let _link: string = props.path
    _link = _link.substring(0, _link.lastIndexOf(".mdx"))
    let itemTitle: string = meta ? meta["title"] : "fuck"
    return (<div>
        <a href={`/${_link}`}><h2>{itemTitle}</h2></a>
        {/* <Link to={`/${props.path}`}>{itemTitle}</Link> */}
        <MDX>{excerpt}</MDX>
    </div>)
}

export default () => {
    let siteData: any = useSiteData()
    let routeData: MarkdownMetaInfo[] = Object.values(useRouteData()) as MarkdownMetaInfo[]

    return (<PageFrame>
        <div className="w-100 d-flex flex-column">
            {routeData.filter(rd => rd.meta).map((mt, i) => <BlogItem key={i} {...mt}></BlogItem>)}
            <hr />
        </div>
    </PageFrame>)
}