import { Link } from "@reach/router"
import _ from "lodash"
import React, { ReactElement, ReactNodeArray, useState, useEffect } from "react"
import { useSiteData, useLocation } from "react-static"
import { IMenuItemModal } from "../blog-loader"
import { deepTraverse } from "../commons"
import "./menu_sidebar.less"
import BreadCrumb from "./breadcrumb"

type TMenuItemProps = { children: ReactNodeArray, modal: IMenuItemModal }

const UL_STYLE: string = "nav default-pills nav-pills nav-fills"

const MenuItem: React.FC<TMenuItemProps> = (props: TMenuItemProps) => {
    const children: ReactNodeArray = props.children
    const modal: IMenuItemModal = props.modal
    const _link: string = `/${modal.link}`

    const [currentPath, setCurrentPath] = useState("")
    useEffect(() => setCurrentPath((window && window.location.pathname) || ""))
    console.info("currentPath", currentPath)

    return (<nav className={`menu-layer-${modal.layer} nav-item w-100`}>
        <Link to={_link}
            className={`icon-${modal.icon} nav-link ${_link == currentPath ? "active" : ""} hoverable rounded-pill d-flex justify-content-between`}>
            <span>{modal.label}</span>
            <span className="badge badge-pill badge-info align-self-center">{modal.leaveCount}</span>
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

const NavSidebar: React.FC = () => {

    const siteData: any = useSiteData()

    const _menus = (siteData["menus"] as IMenuItemModal[])
    let modalStack: IMenuItemModal[] = [...Object.values(_menus)]
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
    // console.info("currentPath", currentPath)

    return (<header className="menu_sidebar d-flex flex-column mr-lg-1 rounded-1 shadow">
        <div className="menu_header d-flex flex-lg-column align-items-center">
            <div className="logo text-center d-flex align-items-center m-lg-4">
                <a href="/home">
                    <img className="rounded-circle w-100 h-100 hoverable" src="/res/cfcodefans.jpg" />
                </a>
            </div>
            <div className="nav-title text-center flex-grow-1 w-100">
                <h5 className="text-black">cfcodefans</h5>
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

            <div className="navbar-collapse border border-0 z-depth-0 d-lg-block collapse" id="menu_box">
                <nav className={`menu ${UL_STYLE} smooth-scroll w-100 `}>
                    {_menus.map(m => linkAndElements.get(m.link))}
                </nav>
            </div>
        </div>
    </header>)
}

export default NavSidebar