import { deepTraverse, i } from "lib/commons"
import _ from "lodash"
import { NextRouter, useRouter } from "next/dist/client/router"
import Link from "next/link"
import React, { ReactElement, ReactNodeArray, useEffect, useState } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { IMenuItemModal } from "../types"
import NavBreadCrumbs from "./gadgets"

const UL_STYLE: string = "nav "

function isClosestMenu(modal: IMenuItemModal, rp: string): boolean {
    const mp: string = `/${modal.link}`
    // i("isClosestMenu", mp, rp, rp.substring(0, rp.lastIndexOf("/")))

    if (_.isEmpty(mp) || _.isEmpty(rp)) return false
    if (modal.children.map(c => `/${c.link}`).find(cp => cp === rp)) return false
    if (mp == rp) return true
    return mp === rp.substring(0, rp.lastIndexOf("/"))
}

function MenuItem({ children, modal }: { children: ReactNodeArray, modal: IMenuItemModal }): JSX.Element {
    const _link: string = `/${modal.link}`
    const router: NextRouter = useRouter()

    const isSelected: boolean = isClosestMenu(modal, router.asPath)

    return (<Nav className={`menu-layer-${modal.layer} flex-column mt-1`}>
        <Nav.Link key={modal.label} eventKey={modal.label} as={"div"} active={isSelected}>
            <Link href={_link}>
                <a className={`icon-${modal.icon} ${isSelected ? "active ml-n1 grey lighten-3" : ""} rounded-pill hoverable d-flex pl-2 pr-1 justify-content-between`}>
                    <span className="menu-label text-capitalize">{modal.label}</span>&nbsp;
                    <span className={`${isSelected ? "" : "x-ball grey lighten-3 "} px-2 align-self-center`}>{modal.leaveCount}</span>
                </a>
            </Link>
        </Nav.Link>
        {children}
    </Nav>)
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

    return <Navbar collapseOnSelect expand="lg" className="nav-sidebar menu-sidebar">

        <Navbar.Brand as={"div"} href="/" className="menu-header align-items-center">
            <div className="logo text-center d-flex align-items-center m-2">
                <a href="/">
                    <img className="rounded-circle w-100 h-100 hoverable" src="/assets/images/cfcodefans.jpg" />
                </a>
            </div>
            <div className="nav-title text-center flex-grow-1 w-100">
                <Link href="/resume">
                    <a className="text-capitalize font-weight-bold">
                        [cfcodefans]
                    </a>
                </Link>
            </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu_box" />

        <Navbar.Collapse id="menu_box" className="align-items-start w-100">
            <div className={`menu smooth-scroll w-100`}>
                {menus.map(m => linkAndElements.get(m.link))}
            </div>
        </Navbar.Collapse>
    </Navbar>

    // return (<nav className="nav-sidebar menu-sidebar d-flex flex-column mr-lg-1">
    //     <div className="menu_header flex-lg-column align-items-center">
    //         <div className="logo text-center d-flex align-items-center m-2">
    //             <a href="/">
    //                 <img className="rounded-circle w-100 h-100 hoverable" src="/assets/images/cfcodefans.jpg" />
    //             </a>
    //         </div>
    //         <div className="nav-title text-center flex-grow-1 w-100">
    //             <Link href="/resume">
    //                 <a className="text-capitalize font-weight-bold">
    //                     [cfcodefans]
    //                 </a>
    //             </Link>
    //         </div>
    //     </div>

    //     <div id="menu_nav" className="d-flex align-items-center navbar pl-1 pr-1 border border-0 z-depth-0 ">
    //         <div aria-label="breadcrumb" className="d-flex d-lg-none justify-content-between w-100 mb-2 font-up-bold">
    //             <div className="logo text-center d-flex align-items-center m-2">
    //                 <a href="/">
    //                     <img className="rounded-circle w-100 h-100 hoverable" src="/assets/images/cfcodefans.jpg" />
    //                 </a>
    //             </div>
    //             <NavBreadCrumbs _path={currentPath} />

    //             <button className="navbar-toggler"
    //                 type="button"
    //                 data-toggle="collapse"
    //                 data-target="#menu_box"
    //                 aria-controls="menu_box"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation">
    //                 <span className="dark-blue-text">
    //                     <i className="fas fa-bars fa-1x"></i>
    //                 </span>
    //             </button>
    //         </div>

    //         <div className="collapse navbar-collapse navbar nav border border-0 z-depth-0 d-lg-block pr-1" id="menu_box">
    //             <nav className={`menu ${UL_STYLE} smooth-scroll w-100 `}>
    //                 {menus.map(m => linkAndElements.get(m.link))}
    //             </nav>
    //         </div>
    //     </div>
    // </nav>)

}