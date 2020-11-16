import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../components/layout"
import { BlogList } from "../components/mdx-ui"
import { bootstrap } from "../lib/blogs"
import { i } from "../lib/commons"
import { ILayoutPros } from "../types"

export default function IndexPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const router: NextRouter = useRouter()
    const { routes, pathToMarkdowns } = layoutProps
    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)

    let pageContent = null
    if (currentRoute) {
        pageContent = <BlogList mds={currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath])} />
    } else {
        pageContent = <BlogList mds={Object.values(pathToMarkdowns)} />
    }

    return (<Layout home layoutProps={layoutProps}>
        {pageContent}
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("index.tsx", "context", context)
    const layoutProps: ILayoutPros = await bootstrap()
    i("index.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.routeTree.length])
    return { props: { layoutProps } }
}