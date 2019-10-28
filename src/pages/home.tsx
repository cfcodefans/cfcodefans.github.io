import React from "react"
import { Head } from "react-static"
import { HOME_META_DESCRIPTION, HOME_META_ROBOTS, HOME_OG_TITLE, HOME_TITLE } from "../../types"
import NavSidebar from "../components/menu_sidebar"
import MiscSidebar from "../components/misc_sidebar"
import "./home.less"

export default () => {
    return (<div className="container-fluid d-flex">
        <Head>
            <title>{HOME_TITLE}</title>
            <meta name="description" content={HOME_META_DESCRIPTION} />
            <meta name="og:title" property="og:title" content={HOME_OG_TITLE} />
            <meta name="robots" content={HOME_META_ROBOTS} />
        </Head>
        <NavSidebar />
        <main className="w-100 bg-light">
        </main>
        <MiscSidebar />
    </div>)
}