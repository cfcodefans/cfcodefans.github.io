import type { AppProps /*, AppContext */ } from "next/app"
import Head from "next/head"
import React from "react"

export default function _App({ Component, pageProps }: AppProps): JSX.Element {
    return (<>
        <Head>
            <meta charSet="UTF-8" />
            <link href="/css/mainframe-protrait.css" rel="stylesheet" media="(orientation: portrait)" />
            <link href="/css/mainframe-landscape.css" rel="stylesheet" media="(orientation:landscape)" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="X-FRAME-OPTIONS" content="deny" />
        </Head>
        <Component {...pageProps} />
    </>)
}