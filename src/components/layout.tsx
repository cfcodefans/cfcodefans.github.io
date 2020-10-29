import { Html } from "next/document"
import Head from "next/head"
import React, { ReactNode } from "react"
import MiscSideBar from "./misc-sidebar"
import NavSideBar from "./nav-sidebar"
import NavTopBar from "./nav-topbar"

export default function Layout({ children, home }: { children: ReactNode, home: boolean }): JSX.Element {
    return (<div style={{ "maxWidth": "1920px", "position": "relative" }} >
        <NavSideBar />
        <NavTopBar />
        <MiscSideBar />
        <main className="main-pane">
            <div className="w-100">
                {children}
            </div>
        </main>

        <script src="https://cdn.bootcdn.net/ajax/libs/popper.js/2.5.3/cjs/popper.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.slim.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.js"></script>
    </div>)
}