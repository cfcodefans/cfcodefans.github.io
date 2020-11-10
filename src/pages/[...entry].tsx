import _ from "lodash"
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../components/layout"
import { BlogItem, BlogList, MDX_COMPONENTS } from "../components/mdx-ui"
import { bootstrap, loadBlog } from "../lib/blogs"
import { getNameAndExt, i, jsf, prependIfMissing } from "../lib/commons"
import { mdxStrToHtml } from "../lib/mdx-fn"
import { ILayoutPros } from "../types"

import hydrate from "next-mdx-remote/hydrate"

export default function BlogsPage({ layoutProps, content }: { layoutProps: ILayoutPros, content: string }): JSX.Element {
    const router: NextRouter = useRouter()

    const { routes, pathToMarkdowns } = layoutProps

    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)
    let pageContent = null
    i("[...entry].tsx", "_path", _path)

    if (pathToMarkdowns[_path + ".mdx"]) {
        if (_.isNull(content)) {
            pageContent = <h1>{_path + ".mdx"} has no content!!!</h1>
        }
        const display = hydrate(content, MDX_COMPONENTS)
        pageContent = <article>{display}</article>
    } else {
        pageContent = <BlogList mds={currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath])} />
    }

    return (<Layout home layoutProps={layoutProps}>
        {pageContent}
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    const { params } = context
    const { entry } = params
    const _path: string = [... (_.isArray(entry) ? entry as string[] : [entry])].join("/")
    i("category.index.tsx", "context", jsf(context), "_path", _path)

    const layoutProps: ILayoutPros = await bootstrap()
    let content = null
    if (layoutProps.pathToMarkdowns[prependIfMissing(_path + ".mdx", "/")]) content = await mdxStrToHtml(await loadBlog(_path + ".mdx"))
    i("category.index.tsx", "Object.keys(pathToMarkdowns)", Object.keys(layoutProps.pathToMarkdowns), "_path", _path + ".mdx", "mdx", content)

    return { props: { layoutProps, content } }
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {
    // i("category.index.tsx", "context", typeof (context))
    const layoutProps: ILayoutPros = await bootstrap()
    i("category.index.tsx", "layoutProps", layoutProps.routes.map(r => "/" + r._path), "mds", layoutProps.pathToMarkdowns)

    return {
        paths: layoutProps.routes
            // .filter(r => !r.path.endsWith(".mdx"))
            .map(r => r._path)
            .map(p => {
                const [basePath, ext] = getNameAndExt(p)
                // if (ext == "mdx") {
                //     return p + ".html"
                // }
                return basePath
            }),
        fallback: false
    }
}