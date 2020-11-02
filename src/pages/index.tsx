import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import React, { ReactNode } from "react"
import Layout from "../components/layout"
import { i } from "../lib/commons"
import { IMenuItemModal } from "../types"

export default function IndexPage(pageProps): JSX.Element {
    i("index.tsx", "pageProps", pageProps)
    return (<Layout home>
        <h1>Here is IndexPage</h1>
    </Layout>)
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("_app.tsx", "context", context)
    const { bootstrap, } = await import("../lib/blogs")
    const menus: IMenuItemModal[] = await bootstrap()
    i("_app.tsx", "menus", menus)
    return { props: { menus } }
}