import * as _ from "lodash"
import React, { ReactElement, ReactNodeArray } from "react"
import { useSiteData } from "react-static"
import { MenuItemModal } from "../data-loader"
import { Link } from "@reach/router"
import "./menu_sidebar.less"

type TMenuItemProps = { children: ReactNodeArray, modal: MenuItemModal }

const UL_STYLE: string = "nav default-pills nav-pills nav-fills"

const MenuItem: React.FC<TMenuItemProps> = (props: TMenuItemProps) => {
    const children: ReactNodeArray = props.children
    const modal: MenuItemModal = props.modal

    return (<nav className={`menu-layer-${modal.layer} nav-item w-lg-100`}>
        <Link to={modal.link} className={`icon-${modal.icon} nav-link hoverable rounded-pill`}>{modal.label}</Link>
        {
            children && children.length > 0 &&
            (<nav className={`${UL_STYLE} `}>
                {children}
            </nav>)
        }
    </nav>)
}

const NavSidebar: React.FC = () => {
    const siteData: any = useSiteData()

    const _menus = (siteData["menus"] as MenuItemModal[])[0].children
    const modalStack: MenuItemModal[] = [...Object.values(_menus)]
    const linkAndElements: Map<string, ReactElement> = new Map()

    modalStack.forEach(m => linkAndElements.set(m.link, <MenuItem modal={m} children={[]} key={m.link} />))
    let i: number = 100

    while (modalStack.length > 0 && i-- > 0) {
        let modal: MenuItemModal = modalStack.pop()
        let subModals: MenuItemModal[] = modal.children.filter(m => !_.isEmpty(m.children))
        if (_.isEmpty(subModals))
            continue

        let menuElement: ReactElement = linkAndElements.get(modal.link)

        const subElements: ReactElement[] = subModals.map(sm => <MenuItem modal={sm} children={[]} key={sm.link} />)
        let elementChildrenRef: ReactNodeArray = menuElement.props.children
        elementChildrenRef.push(...subElements)
        subElements.forEach(se => linkAndElements.set(se.props.modal.link, se))

        modalStack.push(...subModals)
    }

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