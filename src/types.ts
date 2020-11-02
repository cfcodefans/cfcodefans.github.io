export type TNode = {
    children: TNode[]
}

export type TTraverser = (node: TNode) => TNode[]

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