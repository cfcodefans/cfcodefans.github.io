import App, { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import { i } from "../lib/commons"


export default function _App({ Component, pageProps }: AppProps): JSX.Element {
    // i("_app.tsx", "pageProps", typeof pageProps)

    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="X-FRAME-OPTIONS" content="deny" />
        </Head>
        <Component {...pageProps} />
    </>)
}

export async function getInitialProps(appContext: AppContext): Promise<AppInitialProps> {
    const { Component, ctx, } = appContext
    // const { bootstrap, } = await import("../lib/blogs")

    // const menus: IMenuItemModal[] = await LOAD_MENUS(await LOAD_PATHS(ROOT_PATH), BASE_PATH)
    const menus = await App.getInitialProps(appContext)
    i("_app.tsx", "menus", menus)
    return { pageProps: { menus } }
}

// _App.getInitialProps = getInitialProps
