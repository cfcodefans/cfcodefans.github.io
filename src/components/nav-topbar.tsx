import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import NavBreadCrumbs from "./gadgets"

export default function NavTopBar(): JSX.Element {
    const router: NextRouter = useRouter()

    return <div className="top-navbar">
        <NavBreadCrumbs _path={router.asPath} />
    </div>
}