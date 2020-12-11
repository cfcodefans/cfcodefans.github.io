import { addDays } from "date-fns"
import * as _ from "lodash"
import { ITNode, TNode, TTraverser } from "types"

export function sliceMean(arr: number[], start: number = 0, end: number): number {
    if (_.isEmpty(arr) || start >= arr.length || start > end) return NaN

    start = Math.max(0, start)
    end = Math.min(arr.length, end)

    if (start == end) return arr[start]

    let sum: number = 0
    for (let i = start; i < end; i++) sum += arr[i]
    return sum / (end - start)
}

export function compare<T>(s1: T, s2: T): number {
    return (s1 == s2) ? 0 : (s1 > s2 ? 1 : -1)
}

export function deepTraverse<N extends TNode = TNode>(nodes: N[], traverser?: TTraverser): N[] {
    const nodeStack: N[] = [...nodes.reverse()]
    const result: N[] = []

    while (nodeStack.length > 0) {
        let node: N = nodeStack.pop()
        result.push(node)
        let subNodes: N[] = ((traverser ? traverser(node) : node.children) || node.children || []) as N[]
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

        for (let parent: ITNode = _.last(ancestors);
            // parent && _.findIndex(parent.children, currentNode) < 0;
            parent && parent.children && parent.children.findIndex((c) => c.comparedTo(currentNode) == 0) < 0;
            parent = _.last(ancestors)) {
            ancestors.pop()
        }

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

        for (let parent: ITNode = _.last(ancestors);
            // parent && _.findIndex(parent.children, currentNode) < 0;
            parent && parent.children && parent.children.findIndex((c) => c.comparedTo(currentNode) == 0) < 0;
            parent = _.last(ancestors)) {
            ancestors.pop()
        }

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

export function i(filename: string, ...rest: any[]) {
    const stackTrace = (new Error()).stack
    const frames = stackTrace.match(/[^\r\n]+/g)
    const idx = frames.findIndex(frame => frame.includes("at i (")) + 1
    console.info("\n", filename, frames[idx], "\n\t", ...(rest || []).map(obj => jsf(obj)), "\n")
}

export function e(filename: string, ...rest: any[]) {
    const stackTrace = (new Error()).stack
    const frames = stackTrace.match(/[^\r\n]+/g)
    const idx = frames.findIndex(frame => frame.includes("at i (")) + 1
    console.error("\n", filename, frames[idx], "\n\t", ...(rest || []).map(obj => jsf(obj)), "\n")
}

export function jsf(v: any, indent: string = "  "): string {
    return v instanceof Object ? JSON.stringify(v, null, indent) : v
}

//org.apache.commons.io.FilenameUtils#getExtension
export function getNameAndExt(pathStr: string): [string, string] {
    if (_.isEmpty(pathStr)) return [pathStr, ""]
    const extPos: number = _.lastIndexOf(pathStr, ".")
    const lastSep: number = Math.max(_.lastIndexOf(pathStr, WINDOWS_SEPARATOR), _.lastIndexOf(pathStr, UNIX_SEPARATOR))
    if (lastSep > extPos) return [pathStr, ""]
    return [pathStr.substring(0, extPos), pathStr.substring(extPos + 1)]
}

const WINDOWS_SEPARATOR = "\\"
const UNIX_SEPARATOR = "/"

export function prependIfMissing(str: string, prefix: string, ...prefixes: string[]): string {
    if (_.isEmpty(str) || _.isEmpty(prefix) || str.startsWith(prefix)) return str
    if (!_.isEmpty(prefixes)) {
        for (let p of prefix) {
            if (str.startsWith(p)) return str
        }
    }
    return prefix + str
}

export type Duration = "day" | "month" | "year"
export type DateUnit = "year" | "month" | "day"

export function yesterday():Date {
    return addDays(new Date(), -1)
}

export function diffMonth(start: Date, end: Date = new Date()): number {
    let sign: number = Math.sign(end.getTime() - start.getTime())
    return sign * (12 * Math.abs(end.getUTCFullYear() - start.getUTCFullYear()) +
        sign * (end.getUTCMonth() - start.getUTCMonth()))
}

export function diffYear(d1: Date, d2: Date): number {
    return Math.abs(d1.getFullYear() - d2.getFullYear())
}

export function diffDays(d1: Date, d2: Date): number {
    return Math.ceil(Math.abs(d1.getTime() - d2.getTime()) / 86400000.0)
}

export function maxDate(...ds: Date[]): Date {
    return new Date(Math.max(...ds.map(d => d.getTime())))
}

export function minDate(...ds: Date[]): Date {
    return new Date(Math.min(...ds.map(d => d.getTime())))
}

export function period(d: Date, len: number, unit: Duration): Date[] {
    return _.range(0, len).map(i => addDate(d, i, unit))
}

export function span(d1: Date, d2: Date, unit: Duration): Date[] {
    let start: Date = d1 || d2
    if (!start) return []
    let end: Date = d2 || new Date()

    start = minDate(start, end)
    end = maxDate(start, end)

    return _.range(0, diffDate(start, end, unit)).map(delta => addDate(start, delta, unit))
}

export function combine<T>(accs: T[], acc: T, keyName: _.PropertyPath): T[] {
    const i: number = _.findIndex(accs, (_acc) => _.get(_acc, keyName) == _.get(acc, keyName))
    if (i >= 0)
        accs[i] = acc
    else
        accs.push(acc)
    return accs
}

export function diff<T>(a1: T[], a2: T[], keyName: string): T[] {
    if (_.isEmpty(a1) && _.isEmpty(a2)) return []
    if (_.isEmpty(a1) && !_.isEmpty(a2)) return a2
    if (!_.isEmpty(a1) && _.isEmpty(a2)) return a1

    return _.differenceBy(
        _.maxBy([a1, a2], (a) => a.length),
        _.minBy([a1, a2], (a) => a.length),
        a1, keyName)
}

export function diffDate(d1: Date, d2: Date, unit: DateUnit = "month"): number {
    if (!(d1 && d2)) return NaN

    d1 = floorDate(d1, unit)
    d2 = ceilDate(d2, unit)

    if (unit == "day") return (d1.getTime() - d2.getTime()) / 86400000
    if (unit == "month") {
        return ((d1.getFullYear() - d2.getFullYear()) * 12 + (d1.getMonth() - d2.getMonth()))
    }

    return d1.getFullYear() - d2.getFullYear()
}

export function addDate(_d: Date, delta: number, unit: DateUnit = "day"): Date {
    if (!_d) return _d
    _d = (_.isString(_d)) ? new Date(_d) : _d as Date

    let [y, M, d, h, m, s] = [_d.getFullYear(), _d.getMonth(), _d.getDate(), _d.getHours(), _d.getMinutes(), _d.getSeconds()]
    switch (unit) {
        case "year": {
            return new Date(y + delta, M, d, h, m, s)
        }
        case "month": {
            return new Date(y, M + delta, d, h, m, s)
        }
        case "day":
            return new Date(y, M, d + delta, h, m, s)
    }
}

export function ceilDate(d: Date, unit: DateUnit = "day"): Date {
    if (!d) return d
    switch (unit) {
        case "year":
            return new Date(d.getFullYear() + 1, 1, 1)
        case "month":
            return new Date(d.getFullYear(), d.getMonth() + 1, 1)
        case "day":
            return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)
        default:
            return d
    }
}

export function floorDate(d: Date, unit: DateUnit = "day"): Date {
    if (!d) return d
    switch (unit) {
        case "year":
            return new Date(d.getFullYear(), 1, 1)
        case "month":
            return new Date(d.getFullYear(), d.getMonth(), 1)
        case "day":
            return new Date(d.getFullYear(), d.getMonth(), d.getDate())
        default:
            return d
    }
}

