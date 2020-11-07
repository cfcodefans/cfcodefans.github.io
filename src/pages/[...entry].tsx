import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../components/layout"
import { BlogItem } from "../components/mdx-ui"
import { bootstrap } from "../lib/blogs"
import { i } from "../lib/commons"
import { ILayoutPros } from "../types"

export default function IndexPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const router: NextRouter = useRouter()
    i("[category]/index.tsx", "pageProps", typeof (layoutProps))

    const { routes } = layoutProps
    const currentRoute = routes.find(r => ("/" + r._path) == router.asPath)

    return (<Layout home layoutProps={layoutProps}>
        <div className="w-100 d-flex flex-column">
            {currentRoute.data?.filter(rd => rd.meta).map((mt, i) => <BlogItem key={i} {...mt}></BlogItem>)}
        </div>
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("category.index.tsx", "context", context)
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