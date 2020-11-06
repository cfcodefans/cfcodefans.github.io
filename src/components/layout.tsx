import { Html } from "next/document"
import Head from "next/head"
import React, { ReactNode, useReducer } from "react"
import { ILayoutPros, IMenuItemModal, IRouteModal } from "../types"
import MiscSideBar from "./misc-sidebar"
import NavSideBar from "./nav-sidebar"
import NavTopBar from "./nav-topbar"
import * as _ from "lodash"



export class LayoutCtx implements ILayoutPros {
    menus: IMenuItemModal[]
    routeTree: IRouteModal[]
    routes: IRouteModal[]
    dispatcher: React.Dispatch<Partial<LayoutCtx>> = null
    constructor(menus: IMenuItemModal[] = []) {
        this.menus = menus
    }
}

export const LAYOUT_CTX: LayoutCtx = new LayoutCtx()
export const R_LAYOUT_CTX: React.Context<LayoutCtx> = React.createContext(LAYOUT_CTX)

export function CTX_REDUCER(ctx: LayoutCtx, _ctx: Partial<LayoutCtx>): LayoutCtx {
    console.info("CTX_REDUCER", ctx, _ctx)
    return _.assign({ ...ctx }, { ..._ctx })
}

export const CtxProvider: React.FC = ({ children }: { children: ReactNode }) => {
    const [_ctx, ctxDispatcher] = useReducer(CTX_REDUCER, LAYOUT_CTX)
    _ctx.dispatcher = ctxDispatcher

    return (<R_LAYOUT_CTX.Provider value={_ctx}>
        {children}
    </R_LAYOUT_CTX.Provider>)
}

export default function Layout({ children, home, layoutProps }: { children: ReactNode, home: boolean, layoutProps: ILayoutPros }): JSX.Element {
    const { menus } = layoutProps
    return (<div style={{ "maxWidth": "1920px", "position": "relative" }} >
        <CtxProvider>
            <NavSideBar menus={menus} />
            <NavTopBar />
            <MiscSideBar />
            <main className="main-pane">
                <div className="w-100">
                    {children}
                </div>
            </main>
        </CtxProvider>
    </div>)
}