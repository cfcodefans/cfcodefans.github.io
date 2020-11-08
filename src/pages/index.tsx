import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import React from "react"
import Layout from "../components/layout"
import { BlogItem, BlogList } from "../components/mdx-ui"
import { bootstrap } from "../lib/blogs"
import { compare, i } from "../lib/commons"
import { ILayoutPros } from "../types"

export default function IndexPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const { pathToMarkdowns } = layoutProps
    return (<Layout home layoutProps={layoutProps}>
        <BlogList mds={Object.values(pathToMarkdowns)} />
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("category.index.tsx", "context", context)
    const layoutProps: ILayoutPros = await bootstrap()
    i("category.index.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.routeTree.length])
    return { props: { layoutProps } }
}