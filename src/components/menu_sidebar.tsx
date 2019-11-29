import { Link } from "@reach/router"
import _ from "lodash"
import React, { ReactElement, ReactNodeArray } from "react"
import { useSiteData } from "react-static"
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
    // console.info("window", window.location.pathname, "link", modal.link)
    console.info(children && children.length)

    return (<nav className={`menu-layer-${modal.layer} nav-item w-100`}>
        <Link to={_link} className={`icon-${modal.icon} nav-link ${window.location.pathname.includes(_link) ? "active" : ""} hoverable rounded-pill d-flex justify-content-between`}>
            <span>{modal.label}</span>
            <span className="badge badge-pill badge-info align-self-center">{modal.leaveCount}</span>
        </Link>
        {
            children
            && children.length > 0
            && children.findIndex(rn => rn) > -1
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

    return (<header className="menu_sidebar d-flex flex-column mr-lg-1 rounded shadow">
        <div className="menu_header d-flex flex-lg-column align-items-center">
            <div className="logo text-center d-flex align-items-center m-lg-4">
                <a href="/home">
                    <img className="rounded-circle w-100 h-100 hoverable" src="/res/cfcodefans.jpg" />
                </a>
            </div>
            <div className="nav-title text-center mb-lg-3 flex-grow-1 w-100">
                <h5 className="text-black">cfcodefans</h5>
            </div>
        </div>
        <nav id="menu_nav" className="d-flex pl-0 pr-0 align-items-center navbar ">

            <BreadCrumb _path={window.location.pathname} />

            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#menu_box"
                aria-controls="menu_box"
                aria-expanded="false"   
                aria-label="Toggle navigation">
                <span className="dark-blue-text">
                    <i className="fas fa-bars fa-1x"></i>
                </span>
            </button>

            <div className="navbar-collapse collapse" id="menu_box">
                <nav className={`menu ${UL_STYLE} smooth-scroll w-100 pl-2 pr-2`}>
                    {_menus.map(m => linkAndElements.get(m.link))}
                </nav>
            </div>
        </nav>
    </header>)
}

export default NavSidebar