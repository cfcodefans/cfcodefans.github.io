import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import React, { ReactNode } from "react"
import Layout from "../../components/layout"
import { i } from "../../lib/commons"
import { ILayoutPros, IMenuItemModal } from "../../types"
import _ from "lodash"

export default function IndexPage(pageProps): JSX.Element {
    i("[category]/index.tsx", "pageProps", typeof (pageProps))
    const { layoutProps } = pageProps
    return (<Layout home layoutProps={layoutProps}>
        <h1>Here is IndexPage</h1>
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("_app.tsx", "context", typeof (context))
    const { bootstrap, } = await import("../../lib/blogs")
    const layoutProps: ILayoutPros = await bootstrap()
    i("_app.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.menus.length])
    return { props: { layoutProps } }
}

export async function getStaticPath(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {

    
}