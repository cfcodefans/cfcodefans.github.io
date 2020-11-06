import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useRouter, NextRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../../components/layout"
import { bootstrap } from "../../lib/blogs"
import { i } from "../../lib/commons"
import { ILayoutPros } from "../../types"

export default function IndexPage(pageProps): JSX.Element {
    const router: NextRouter = useRouter()
    i("[category]/index.tsx", "pageProps", typeof (pageProps))
    const { layoutProps } = pageProps
    return (<Layout home layoutProps={layoutProps}>
        <h1>Here is IndexPage</h1>
        <pre>
            route: {router.route}
            pathname: {router.pathname}
            asPath: {router.asPath}
        </pre>
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    // i("category.index.tsx", "context", typeof (context))
    const layoutProps: ILayoutPros = await bootstrap()
    i("category.index.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.routeTree.length])
    return { props: { layoutProps } }
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {
    // i("category.index.tsx", "context", typeof (context))
    const layoutProps: ILayoutPros = await bootstrap()
    i("category.index.tsx", "layoutProps", layoutProps.routes.map(r => "/" + r._path))
    return {
        paths: layoutProps.routes.map(r => "/" + r._path),
        fallback: false
    }
}