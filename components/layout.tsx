import Head from "next/head"
import React, { ReactNode } from "react"

export default function Layout({ children, home }: { children: ReactNode, home: boolean }): JSX.Element {
    return <div style={{ "maxWidth": "1920px", "position": "relative" }} >
        <Head>
            <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.css" rel="stylesheet" />
            <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.1/css/all.css" rel="stylesheet" />
        </Head>

        <script src="https://cdn.bootcdn.net/ajax/libs/popper.js/2.5.3/cjs/popper.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.js"></script>
    </div>
}