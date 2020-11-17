import { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import React, { ReactNodeArray } from "react"
import Layout from "../components/layout"
import { i } from "../lib/commons"
import { ILayoutPros } from "../types"

import menus from "../cache/menus.json"
import routeTree from "../cache/route-tree.json"
import routes from "../cache/routes.json"
import pathToMarkdowns from "../cache/mdMetas.json"

const MDX_Frame: React.FC = ({ children }: { children: ReactNodeArray }) => {
    return <div className="p-5">
        <h1>MDX_Frame</h1>
        {children}
    </div>
}

export default function _App({ Component, pageProps, router }: AppProps): JSX.Element {
    i("_app.tsx", "router", router.asPath, "pageProps", Object.keys(pageProps))

    const { layoutProps } = pageProps

    let content: JSX.Element = null

    if (router.asPath.includes("404")) {
        content = <Component {...pageProps} />
    } else {
        content = <Layout home layoutProps={layoutProps}>
            <Component {...pageProps} />
        </Layout>
    }

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="X-FRAME-OPTIONS" content="deny" />
        </Head>
        {/* <MDXProvider components={{ wrapper: MDX_Frame }}>
        </MDXProvider> */}
        {content}
    </>)
}

export async function getInitialProps(appContext: AppContext): Promise<AppInitialProps> {
    const { Component, ctx, } = appContext
    // const { bootstrap, } = await import("../lib/blogs")

    // const menus: IMenuItemModal[] = await LOAD_MENUS(await LOAD_PATHS(ROOT_PATH), BASE_PATH)
    // const layoutProps: ILayoutPros = await bootstrap()
    const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
    i("_app.tsx", "menus", layoutProps.menus.length)
    return { pageProps: { layoutProps } }
}

_App.getInitialProps = getInitialProps
