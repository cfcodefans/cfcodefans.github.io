import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import React from "react"
import Layout from "../components/layout"
import { i } from "../lib/commons"
import { ILayoutPros } from "../types"

export default function IndexPage(pageProps): JSX.Element {
    // i("index.tsx", "pageProps", typeof (pageProps))
    const { layoutProps } = pageProps
    return (<Layout home layoutProps={layoutProps}>
        <h1>Here is IndexPage</h1>
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    // i("index.tsx", "context", typeof (context))
    const { bootstrap, } = await import("../lib/blogs")
    const layoutProps: ILayoutPros = await bootstrap()
    i("index.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.routeTree.length])
    return { props: { layoutProps } }
}