export interface IMenuItemModal extends ITNode {
    label: string
    link: string
    children: IMenuItemModal[]
    icon: string
    layer: number
    leaveCount: number
    comparedTo?: any
}