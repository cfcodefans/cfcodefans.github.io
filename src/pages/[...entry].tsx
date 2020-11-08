import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../components/layout"
import { BlogItem, BlogList } from "../components/mdx-ui"
import { bootstrap } from "../lib/blogs"
import { i } from "../lib/commons"
import { ILayoutPros } from "../types"

import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import dynamic from "next/dynamic"
import Head from "next/head"


export default function BlogsPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const router: NextRouter = useRouter()
    i("[category]/index.tsx", "pageProps", typeof (layoutProps))

    const { routes, pathToMarkdowns } = layoutProps
    const currentRoute = routes.find(r => ("/" + r._path) == router.asPath)

    if (router.asPath.endsWith(".mdx")) {
        return <Layout home layoutProps={layoutProps}>
            <article>
            </article>
        </Layout>
    }

    return (<Layout home layoutProps={layoutProps}>
        <BlogList mds={currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath])} />
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
    i("category.index.tsx", "layoutProps", layoutProps.routes.map(r => "/" + r._path), "mds", layoutProps.pathToMarkdowns)

    return {
        paths: layoutProps.routes.filter(r => !r.path.endsWith(".mdx")).map(r => "/" + r._path),
        fallback: false
    }
}