import _ from "lodash"
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../components/layout"
import { BlogItem, BlogList, MDX_COMPONENTS } from "../components/mdx-ui"
import { bootstrap, loadBlog } from "../lib/blogs"
import { i, jsf } from "../lib/commons"
import { mdxStrToHtml } from "../lib/mdx-fn"
import { ILayoutPros } from "../types"

import hydrate from "next-mdx-remote/hydrate"

export default function BlogsPage({ layoutProps, content }: { layoutProps: ILayoutPros, content: string }): JSX.Element {
    const router: NextRouter = useRouter()
    i("[category]/index.tsx", "pageProps", typeof (layoutProps))

    const { routes, pathToMarkdowns } = layoutProps
    const currentRoute = routes.find(r => ("/" + r._path) == router.asPath)

    if (router.asPath.endsWith(".mdx")) {
        const display = hydrate(content, MDX_COMPONENTS)
        return <Layout home layoutProps={layoutProps}>
            <article>
                {display}
            </article>
        </Layout>
    }

    return (<Layout home layoutProps={layoutProps}>
        <BlogList mds={currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath])} />
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    const { params } = context
    const { entry } = params
    const _path: string = [... (_.isArray(entry) ? entry as string[] : [entry])].join("/")
    i("category.index.tsx", "context", jsf(context), "_path", _path)

    const layoutProps: ILayoutPros = await bootstrap()
    let content = null
    if (_path.endsWith(".mdx")) content = await mdxStrToHtml(await loadBlog(_path))
    // i("category.index.tsx", "mdx", content)

    return { props: { layoutProps, content } }
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {
    // i("category.index.tsx", "context", typeof (context))
    const layoutProps: ILayoutPros = await bootstrap()
    i("category.index.tsx", "layoutProps", layoutProps.routes.map(r => "/" + r._path), "mds", layoutProps.pathToMarkdowns)

    return {
        paths: layoutProps.routes
            // .filter(r => !r.path.endsWith(".mdx"))
            .map(r => "/" + r._path),
        fallback: false
    }
}