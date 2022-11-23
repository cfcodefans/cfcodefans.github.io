import { MDXProvider } from "@mdx-js/react"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import React, { ReactNodeArray } from "react"

import pathToMarkdowns from "data/markdown-meta.json"
import menus from "data/menus.json"
import routeTree from "data/route-tree.json"
import routes from "data/routes.json"
import Layout from "components/layout"
import { BlogHeader, MDX_COMPONENTS } from "components/mdx-ui"
import { i } from "lib/commons"
import { ILayoutPros, TMarkdownMetaInfo } from "types"

import * as gtag from "lib/analystic"
import { useEffect } from "react"
import SharePane from "components/share-pane"

function MDX_Frame({ children }: { children: ReactNodeArray }): JSX.Element {
    return <article children={children} />
}

export default function _App({ Component, pageProps, router }: AppProps): JSX.Element {
    // i("_app.tsx", "router", router.asPath, "pageProps", Object.keys(pageProps))

    if (router.asPath.endsWith("jpg")) {
        i("_app.tsx", "catch jpg", router.asPath)
    }

    const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }

    let content: JSX.Element = null

    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            i("_app.tsx", "url on routeChangeComplete event", url)
            gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])

    if (_path.includes("404")) {
        content = <Component {...pageProps} />
    } else if (Object.keys(pathToMarkdowns).includes(_path + ".mdx")) {
        //For markdown mdx content
        const blogMeta: TMarkdownMetaInfo = pathToMarkdowns[_path + ".mdx"]

        content = <Layout home layoutProps={layoutProps}>
            <MDXProvider components={{ wrapper: MDX_Frame, ...MDX_COMPONENTS }}>
                <div className="container d-flex flex-column pt-3 white rounded-1">
                    <BlogHeader {...blogMeta} />
                    <div className="w-100">
                        <SharePane meta={blogMeta.meta} />
                    </div>
                    <hr />
                    <Component {...pageProps} />
                </div>
            </MDXProvider>
        </Layout>
    } else {
        content = <Layout home layoutProps={layoutProps}><Component {...pageProps} /></Layout>
    }

    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="X-FRAME-OPTIONS" content="deny" />
        </Head>
        {content}
    </>
}

export async function getInitialProps(appContext: AppContext): Promise<AppInitialProps> {
    const { Component, ctx, } = appContext
    const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
    // i("_app.tsx", "menus", layoutProps.menus.length)
    return { pageProps: { layoutProps } }
}

_App.getInitialProps = getInitialProps
