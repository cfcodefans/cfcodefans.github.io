export function compare<T>(s1: T, s2: T): number {
    return (s1 == s2) ? 0 : (s1 > s2 ? 1 : -1)
}

export type TNode = {
    children: TNode[]
}

export type TTraverser = (node: TNode) => TNode[]

export function deepTraverse(nodes: TNode[], traverser?: TTraverser): TNode[] {
    const nodeStack: TNode[] = [...nodes.reverse()]
    const result: TNode[] = []

    while (nodeStack.length > 0) {
        let node: TNode = nodeStack.pop()
        result.push(node)
        let subNodes: TNode[] = traverser ? traverser(node) : node.children
        nodeStack.push(...subNodes.reverse())
    }

    return result
}