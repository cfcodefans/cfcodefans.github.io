import Link from "next/link"
import React, { ReactNodeArray, useEffect, useState } from "react"
import { IMenuItemModal } from "../types"

type TMenuItemProps = { children: ReactNodeArray, modal: IMenuItemModal }

const UL_STYLE: string = "nav default-pills nav-pills nav-fills"

function MenuItem({ children, modal }: TMenuItemProps): JSX.Element {
    const _link: string = `/${modal.link}`

    const [currentPath, setCurrentPath] = useState("")
    useEffect(() => setCurrentPath((window && window.location.pathname) || ""))
    console.info("currentPath", currentPath)

    return (<nav className={`menu-layer-${modal.layer} nav-item w-100`}>
        <Link href={_link}>
            <a className={`icon-${modal.icon} nav-link ${_link == currentPath ? "active" : ""} hoverable rounded-pill d-flex justify-content-between`}>
                <span>{modal.label}</span>
                <span className="badge badge-pill badge-info align-self-center">{modal.leaveCount}</span>
            </a>
        </Link>
        {
            children
            && children.filter(rn => rn).length > 0
            && (<nav className={`${UL_STYLE} `} key={modal.label}>
                {children}
            </nav>)
        }
    </nav>)
}

export default function NavSideBar(): JSX.Element {
    return <nav className="nav-sidebar">
        <div className="navbar navbar-light">
            <a className="navbar-brand" href="#">
                <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
        </div>
        <div className="collapse navbar-collapse mt-2 container-fluid " id="nav_items">
            <ul className="nav nav-pills py-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#!">Tech</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">Trend</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">Math</a>
                </li>
            </ul>
        </div>
    </nav>
}