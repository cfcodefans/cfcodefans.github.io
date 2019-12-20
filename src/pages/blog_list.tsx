import React from "react"
import { useRouteData, useSiteData } from "react-static"
import PageFrame from "../components/page_frame"

import MDX from "@mdx-js/runtime"
import MDX_Header from "../components/mdx_header"
const REMARK_ATTR = require("remark-attr")
import { MarkdownMetaInfo } from "../commons"

const BlogItem: React.FC<MarkdownMetaInfo> = (props: MarkdownMetaInfo) => {
    let excerpt: string = props.excerpt
    let meta: any = props.meta
    let _link: string = props.path
    _link = _link.substring(0, _link.lastIndexOf(".mdx"))
    return (<section className="d-flex flex-column align-items-center rounded-1 shadow container pt-3 mt-3 mb-3">
        <MDX_Header {...props} />
        <MDX remarkPlugins={[REMARK_ATTR]}>{excerpt}</MDX>
        <a href={`/${_link}`}><h3>read more »</h3></a>
    </section>)
}

export default () => {
    let siteData: any = useSiteData()
    let routeData: MarkdownMetaInfo[] = Object.values(useRouteData()) as MarkdownMetaInfo[]

    return (<PageFrame>
        <div className="w-100 d-flex flex-column">
            {routeData.filter(rd => rd.meta).map((mt, i) => <BlogItem key={i} {...mt}></BlogItem>)}
        </div>
    </PageFrame>)
}