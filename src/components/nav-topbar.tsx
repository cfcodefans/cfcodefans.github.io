import _ from "lodash"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import NavBreadCrumbs from "./gadgets"

export default function NavTopBar(): JSX.Element {
    const router: NextRouter = useRouter()
    if (router.asPath.length == 1 && router.asPath[0] === "/") {
        return null
    }

    return <div className="top-navbar">
        <NavBreadCrumbs _path={router.asPath} />
    </div>
}