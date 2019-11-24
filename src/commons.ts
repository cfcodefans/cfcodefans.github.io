import * as _ from "lodash"

export function compare<T>(s1: T, s2: T): number {
    return (s1 == s2) ? 0 : (s1 > s2 ? 1 : -1)
}

export type TNode = {
    children: TNode[]
}


export type TTraverser = (node: TNode) => TNode[]

export interface IComparable {
    comparedTo(another: IComparable): number
}

export interface ITNode extends IComparable {
    children: ITNode[]
}

export function deepTraverse(nodes: TNode[], traverser?: TTraverser): TNode[] {
    const nodeStack: TNode[] = [...nodes.reverse()]
    const result: TNode[] = []

    while (nodeStack.length > 0) {
        let node: TNode = nodeStack.pop()
        result.push(node)
        let subNodes: TNode[] = (traverser ? traverser(node) : node.children) || node.children
        nodeStack.push(...subNodes.reverse())
    }

    return result
}

export type TTraverser_a = (TNode) => Promise<TNode[]>

export async function deepTraverse_a(nodes: TNode[], traverser?: TTraverser_a): Promise<TNode[]> {
    const nodeStack: TNode[] = [...nodes.reverse()]
    const result: TNode[] = []

    while (nodeStack.length > 0) {
        let node: TNode = nodeStack.pop()
        result.push(node)
        let subNodes: TNode[] = (traverser ? await traverser(node) : node.children) || node.children
        nodeStack.push(...subNodes.reverse())
    }

    return result
}


export type TreeVisitor_a = (node: ITNode, ancestors: ITNode[]) => Promise<ITNode[]>

export async function iterateTree_a(roots: ITNode[], visitor: TreeVisitor_a): Promise<ITNode[]> {

    let nodeStack: ITNode[] = [...roots]
    let ancestors: ITNode[] = []

    while (nodeStack.length > 0) {
        let currentNode: ITNode = nodeStack.pop()

        currentNode.children = (visitor && await visitor(currentNode, ancestors)) || currentNode.children

        if (!_.isEmpty(currentNode.children)) {
            for (let parent: ITNode = _.last(ancestors);
                // parent && _.findIndex(parent.children, currentNode) < 0;
                parent && parent.children && parent.children.findIndex((c) => c.comparedTo(currentNode) == 0) < 0;
                parent = _.last(ancestors)) {
                ancestors.pop()
            }

            ancestors.push(currentNode)
            nodeStack.push(...currentNode.children)
        }
    }

    return Promise.resolve(roots)
}

export type TreeVisitor = (node: ITNode, ancestors: ITNode[]) => ITNode[]

export function iterateTree(roots: ITNode[], visitor: TreeVisitor): ITNode[] {

    let nodeStack: ITNode[] = [...roots]
    let ancestors: ITNode[] = []

    while (nodeStack.length > 0) {
        let currentNode: ITNode = nodeStack.pop()

        currentNode.children = (visitor && visitor(currentNode, ancestors)) || currentNode.children

        if (!_.isEmpty(currentNode.children)) {
            for (let parent: ITNode = _.last(ancestors);
                // parent && _.findIndex(parent.children, currentNode) < 0;
                parent && parent.children && parent.children.findIndex((c) => c.comparedTo(currentNode) == 0) < 0;
                parent = _.last(ancestors)) {
                ancestors.pop()
            }

            ancestors.push(currentNode)
            nodeStack.push(...currentNode.children)
        }
    }

    return roots
}
