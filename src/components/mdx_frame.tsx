import React, { ReactNodeArray } from "react"
import { useRouteData } from "react-static"
import PageFrame from "./page_frame"
import _ from "lodash"
import MDX_Header from "./mdx_header"

//https://github.com/react-static/react-static/tree/master/packages/react-static-plugin-mdx
const MDX_Frame: React.FC = (props: { children: ReactNodeArray }) => {
    let routeData: any = useRouteData()
    let reactChildren: ReactNodeArray = props.children

    console.info("routeData for mdx", JSON.stringify(routeData))
    console.info("props for mdx", JSON.stringify(props["meta"]))

    if (_.isEmpty(routeData)) {
        return (<PageFrame>
            <div className="d-flex flex-column container">
                <article children={reactChildren} />
            </div>
        </PageFrame>)
    }
    return (<div className="container d-flex flex-column">
        <article children={reactChildren} />
    </div>)
}

export default MDX_Frame