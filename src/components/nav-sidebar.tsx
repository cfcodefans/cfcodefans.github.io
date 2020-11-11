import Link from "next/link"
import React, { ReactElement, ReactNodeArray, useEffect, useState } from "react"
import { deepTraverse, i } from "../lib/commons"
import { IMenuItemModal } from "../types"
import BreadCrumb from "./breadcrumb"
import _ from "lodash"
// import "./nav-sidebar.less"
import { NextRouter, useRouter } from "next/dist/client/router"

type TMenuItemProps = { children: ReactNodeArray, modal: IMenuItemModal }

const UL_STYLE: string = "nav default-pills nav-pills nav-fills pt-1"

function MenuItem({ children, modal }: TMenuItemProps): JSX.Element {
    const _link: string = `/${modal.link}`

    // const [currentPath, setCurrentPath] = useState("")
    // useEffect(() => setCurrentPath((window && window.location.pathname) || ""))
    const router: NextRouter = useRouter()
    // i("nav-sidebar.tsx", "_link", _link)

    return (<nav className={`menu-layer-${modal.layer} nav-item w-100`}>
        <Link href={_link}>
            <a className={`icon-${modal.icon} nav-link ${_link == router.asPath ? "active z-depth-1-half" : ""} hoverable rounded-pill d-flex px-2 justify-content-between`}>
                <span className="menu-label text-capitalize">{modal.label}</span>
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

export default function NavSideBar({ menus }: { menus: IMenuItemModal[] }): JSX.Element {

    let modalStack: IMenuItemModal[] = [...menus]
    const linkAndElements: Map<string, ReactElement> = new Map()

    deepTraverse(modalStack, (mi: IMenuItemModal) => {
        linkAndElements.set(mi.link, <MenuItem modal={mi} children={[]} key={mi.link} />)
        if (mi.layer >= 2) return []
        return mi.children.filter(c => !_.isEmpty(c.children))
    })

    deepTraverse(modalStack, (mi: IMenuItemModal) => {
        if (!_.isEmpty(mi.children)) {
            let menuItemElm: ReactElement = linkAndElements.get(mi.link)
            let elementChildrenRef: ReactNodeArray = menuItemElm.props.children
            elementChildrenRef.push(...mi.children.map(subMI => linkAndElements.get(subMI.link)))
        }

        if (mi.layer >= 2) return []
        return mi.children.filter(c => !_.isEmpty(c))
    })

    const [currentPath, setCurrentPath] = useState("")
    useEffect(() => setCurrentPath((window && window.location.pathname) || ""))

    return (<nav className="nav-sidebar menu-sidebar d-flex flex-column mr-lg-1 shadow">
        <div className="menu_header flex-lg-column align-items-center">
            <div className="logo text-center d-flex align-items-center m-lg-4">
                <a href="/">
                    <img className="rounded-circle w-100 h-100 hoverable" src="/images/cfcodefans.jpg" />
                </a>
            </div>
            <div className="nav-title text-center flex-grow-1 w-100">
                <h5 className="text-gray text-capitalize">cfcodefans</h5>
            </div>
        </div>

        <div id="menu_nav" className="d-flex align-items-center navbar pl-1 pr-1 border border-0 z-depth-0 ">
            <nav aria-label="breadcrumb" className="d-flex d-lg-none justify-content-between w-100 mb-2 primary-color font-up-bold">
                <BreadCrumb _path={currentPath} />

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#menu_box"
                    aria-controls="menu_box"
                    aria-expanded="true"
                    aria-label="Toggle navigation">
                    <span className="dark-blue-text">
                        <i className="fas fa-bars fa-1x"></i>
                    </span>
                </button>
            </nav>

            <div className="navbar-collapse border border-0 z-depth-0 d-lg-block" id="menu_box">
                <nav className={`menu ${UL_STYLE} smooth-scroll w-100 `}>
                    {menus.map(m => linkAndElements.get(m.link))}
                </nav>
            </div>
        </div>
    </nav>)

}