import * as _ from "lodash"
import React, { ReactElement, ReactNodeArray } from "react"
import { useSiteData } from "react-static"
import { IMenuItemModal } from "../blog-loader"
import { Link } from "@reach/router"
import "./menu_sidebar.less"
import { deepTraverse } from "../commons"

type TMenuItemProps = { children: ReactNodeArray, modal: IMenuItemModal }

const UL_STYLE: string = "nav default-pills nav-pills nav-fills"

const MenuItem: React.FC<TMenuItemProps> = (props: TMenuItemProps) => {
    const children: ReactNodeArray = props.children
    const modal: IMenuItemModal = props.modal

    return (<nav className={`menu-layer-${modal.layer} nav-item w-100`}>
        <Link to={`/${modal.link}`} className={`icon-${modal.icon} nav-link hoverable rounded-pill d-flex justify-content-between`}>
            <span>{modal.label}</span>
            <span className="badge badge-pill badge-primary align-self-center">{modal.leaveCount}</span>
        </Link>
        {
            children && children.length > 0 &&
            (<nav className={`${UL_STYLE} `} key={modal.label}>
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
        return mi.children.filter(c => !_.isEmpty(c))
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

    return (<header className="menu_sidebar d-flex flex-column mr-lg-1">
        <div className="menu_header d-flex flex-lg-column align-items-center">
            <div className="logo text-center d-flex align-items-center m-lg-4">
                <a href="/home">
                    <img className="rounded-circle w-100 h-100" src="/res/cfcodefans.jpg" />
                </a>
            </div>
            <div className="nav-title blue-gradient text-center pt-3 pb-1 mb-lg-3">
                <h5 className="text-white">cfcodefans</h5>
            </div>
        </div>
        <nav id="menu_nav" className="d-flex pl-0 pr-0 align-items-center mt-3">
            <nav className={`menu ${UL_STYLE} smooth-scroll w-100 pl-2 pr-2`}>
                {_menus.map(m => linkAndElements.get(m.link))}
            </nav>
        </nav>
    </header>)
}

export default NavSidebar