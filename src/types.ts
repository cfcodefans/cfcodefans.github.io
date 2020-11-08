import { Dictionary } from "lodash"

export type TNode = {
    children: TNode[]
}

export type TTraverser<N extends TNode = TNode> = (node: N) => N[]

export interface IComparable {
    comparedTo?(another: IComparable): number
}

export interface ITNode extends IComparable, TNode {
    children: ITNode[]
}

export interface IMenuItemModal extends ITNode {
    label: string
    link: string
    children: IMenuItemModal[]
    icon: string
    layer: number
    leaveCount: number
    comparedTo?: any
}

export interface IBlogModal {
    created: Date
    tags?: string[]
    path: string
}

export type TMarkdownMetaInfo = {
    excerpt: string,
    meta: any,
    path: string,
    createdAt: string,
    modifiedAt: string
}

export interface IRouteModal extends ITNode, IComparable {
    path: string
    _path: string
    children: IRouteModal[]
    // data?: TMarkdownMetaInfo[]
    offsprings?: string[]
    childrenCount: number
    sharedData?: any
}


export interface ILayoutPros {
    menus: IMenuItemModal[]
    routeTree: IRouteModal[]
    routes: IRouteModal[]
    pathToMarkdowns: Dictionary<TMarkdownMetaInfo>
}

export interface IPathInfo extends ITNode {
    isFile: boolean
    path: string
    children: IPathInfo[]
    leaves: IPathInfo[]
}