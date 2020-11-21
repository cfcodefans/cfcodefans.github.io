import { MDXProvider } from "@mdx-js/react"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import React, { ReactNodeArray } from "react"
import pathToMarkdowns from "cache/mdMetas.json"
import menus from "cache/menus.json"
import routeTree from "cache/route-tree.json"
import routes from "cache/routes.json"
import Layout from "components/layout"
import { BlogHeader, MDX_COMPONENTS } from "components/mdx-ui"
import { i } from "lib/commons"
import { ILayoutPros } from "types"

const MDX_Frame: React.FC = ({ children }: { children: ReactNodeArray }) => {
    return <article children={children} />
}

export default function _App({ Component, pageProps, router }: AppProps): JSX.Element {
    i("_app.tsx", "router", router.asPath, "pageProps", Object.keys(pageProps))

    // const { layoutProps } = pageProps
    const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
    // const { routes, pathToMarkdowns } = layoutProps

    let content: JSX.Element = null

    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)

    if (_path.includes("404")) {
        content = <Component {...pageProps} />
    } else if (Object.keys(pathToMarkdowns).includes(_path + ".mdx")) {
        //For markdown mdx content
        content = <Layout home layoutProps={layoutProps}>
            <MDXProvider components={{ wrapper: MDX_Frame, ...MDX_COMPONENTS }}>
                <div className="container d-flex flex-column pt-3 white rounded-1">
                    <BlogHeader {...pathToMarkdowns[_path + ".mdx"]} />
                    <Component {...pageProps} />
                </div>
            </MDXProvider>
        </Layout>
    } else {
        content = <Layout home layoutProps={layoutProps}><Component {...pageProps} /></Layout>
    }

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="X-FRAME-OPTIONS" content="deny" />
        </Head>
        {content}
    </>)
}

export async function getInitialProps(appContext: AppContext): Promise<AppInitialProps> {
    const { Component, ctx, } = appContext
    const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
    i("_app.tsx", "menus", layoutProps.menus.length)
    return { pageProps: { layoutProps } }
}

// _App.getInitialProps = getInitialProps
