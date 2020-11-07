import { Dirent, promises as fsp, existsSync } from "fs"
import _ from "lodash"
import path, * as _p from "path"
import * as unified from "unified"
import { Node, Parent } from "unist"
import { ILayoutPros, IMenuItemModal, IRouteModal, ITNode, TMarkdownMetaInfo } from "../types"
import { compare, deepTraverse, deepTraverse_a, i, iterateTree_a, jsf } from "./commons"
import { format } from "date-fns"
import React from "react"
import { mdxStrToHtmlStr } from "./mdx-fn"

const _mdx = require("@mdx-js/mdx")

const DEFAULT_OPTIONS = {
    footnotes: true,
    remarkPlugins: [],
    rehypePlugins: [],
    compilers: []
}
const compiler: unified.Processor = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS)

const BLOGS_DIR: string = path.join(process.cwd(), "blogs")

// export type TNode = {
//     children: TNode[]
// }

// export type TTraverser = (node: TNode) => TNode[]

// export interface IComparable {
//     comparedTo?(another: IComparable): number
// }

// export interface ITNode extends IComparable, TNode {
//     children: ITNode[]
// }

// export interface IMenuItemModal extends ITNode {
//     label: string
//     link: string
//     children: IMenuItemModal[]
//     icon: string
//     layer: number
//     leaveCount: number
//     comparedTo?: any
// }

export interface IPathInfo extends ITNode {
    isFile: boolean
    path: string
    children: IPathInfo[]
    leaves: IPathInfo[]
}
function makePathInfo(path: string, d: Dirent): IPathInfo {
    let pi: IPathInfo = {
        isFile: d.isFile(),
        path: _p.resolve(path, d.name),
        children: [],
        leaves: [],
        comparedTo: null
    }
    pi.comparedTo = ((p1: IPathInfo) => compare(pi.path, p1.path)).bind(pi)
    return pi
}
export async function ls(path: string, predict?: (IPathInfo) => boolean): Promise<IPathInfo[]> {
    let ds: Dirent[] = await fsp.readdir(path, { withFileTypes: true })
    return Promise.resolve(
        ds.map(d => makePathInfo(path, d))
            .filter(p => (predict && predict(p) || true)))
}

function isMDX(pi: IPathInfo): boolean {
    return pi.isFile && /.mdx?$/.test(_p.extname(pi.path))
}

export async function searchBlogs(roots: IPathInfo[]): Promise<IPathInfo[]> {
    let results: IPathInfo[] = await iterateTree_a(roots,
        async (pi: IPathInfo, ancestors: IPathInfo[]) => {
            if (isMDX(pi)) {
                ancestors.forEach(ancestor => ancestor.leaves.push(pi))
                return []
            }
            if (pi.isFile) return []

            return await ls(pi.path, (child) => (!child.isFile || isMDX(child)))
        }) as IPathInfo[]

    return results
}

export async function LOAD_PATHS(_path: string): Promise<IPathInfo[]> {
    let rootPaths: IPathInfo[] = await ls(_path)
    return await searchBlogs(rootPaths)
}

function loadMeta(mdxNode: Node): any {
    let children: Node[] = mdxNode["children"] as Node[]
    if (_.isEmpty(children))
        return {}

    let exportNode: Node = children.find((child: Node) => child.type === "export" && (child["value"] as string || "").indexOf("meta") >= 0)
    if (_.isEmpty(exportNode))
        return {}

    let exportStr: string = exportNode["value"] as string
    if (!exportStr) {
        return {}
    }
    let matches = exportStr.match(/\{.*\}/)
    let content: string = _.isEmpty(matches) ? "{}" : matches[0]
    return JSON.parse(content)
}

const rExcerpt: RegExp = /<!--+\s*more\s*--+>/i

async function loadExcerpt(root: Parent, mdxStr: string): Promise<string> {
    let excerptTag: Node = root.children.find((child: Node) => child["value"] && rExcerpt.test(child["value"] as string))
    if (excerptTag == null)
        return ""

    const excerptStr: string = mdxStr.substring(0, excerptTag.position.start.offset)
    const x = mdxStrToHtmlStr(excerptStr)
    i("blog.ts", "mdx", typeof x, x)

    return x
}

async function getMDXMeta(path: string, filePath: string): Promise<TMarkdownMetaInfo> {
    // const fileStats: Stats = await fsp.lstat(filePath)
    // const mdxStr: string = await fsp.readFile(filePath, "utf-8")

    const [fileStats, mdxStr] = await Promise.all([fsp.lstat(filePath), fsp.readFile(filePath, "utf-8")])

    const mdxContent: Node = compiler.parse(mdxStr)
    return {
        meta: loadMeta(mdxContent),
        excerpt: await loadExcerpt(mdxContent as Parent, mdxStr),
        path,
        createdAt: format(fileStats.birthtime, "yyyy-MM-dd"),
        modifiedAt: format(fileStats.ctime, "yyyy-MM-dd")//yyyy-MM-dd'T'HH:mm:ss.SSSxxx
    }
}

export async function pathToRouteModal(pi: IPathInfo, basePath: string): Promise<IRouteModal> {
    let _path: string = _p.relative(basePath, pi.path).replace(/\\/g, "/")
    let path: string = `/${_p.basename(_path)}`
    let template: string = pi.isFile ? _p.resolve(basePath, _path) : "src/pages/blog_list"
    let children: IRouteModal[] = pi.isFile ? null : []
    let data: any = {}

    if (pi.isFile && /.mdx?$/.test(_p.extname(pi.path))) {
        console.info(`loading markdown meta for ${pi.path}`)
        data = await getMDXMeta(_path, pi.path)
    }

    function getData() {
        return _.flattenDeep(this.data)
    }

    let route: IRouteModal = {
        path,
        _path,
        template,
        children,
        data,
        // getData: null,
        childrenCount: 0,
        comparedTo: null
    }

    // route.getData = getData.bind(route)
    // route.comparedTo = ((r1: IRouteModal) => compare(this._path, r1._path)).bind(route)
    return route
}

export async function pathTreeToRouteTree(rootPaths: IPathInfo[], basePath: string): Promise<IRouteModal[]> {
    if (_.isEmpty(rootPaths)) return []

    let pathAndRouteModals: Map<string, IRouteModal> = new Map
    await deepTraverse_a(rootPaths, async (pi: IPathInfo) => {
        let route: IRouteModal = await pathToRouteModal(pi, basePath)
        pathAndRouteModals.set(pi.path, route)
        return pi.children
    })

    await deepTraverse_a(rootPaths, async (pi: IPathInfo) => {
        let route: IRouteModal = pathAndRouteModals.get(pi.path)
        route.children = pi.children.map(childPath => pathAndRouteModals.get(childPath.path))
        route.data = _.flatten(pi.leaves.map(childPath => pathAndRouteModals.get(childPath.path).data))
        route.childrenCount = route.data.length
        return pi.children
    })

    return Promise.resolve(rootPaths.map(rp => pathAndRouteModals.get(rp.path)))
}

export function pathToMenu(pi: IPathInfo, basePath: string): IMenuItemModal {
    let _path: string = _p.relative(basePath, pi.path).replace(/\\/g, "/")
    let baseName: string = _p.basename(pi.path)
    let menuItem: IMenuItemModal = {
        label: baseName,
        link: _path,
        children: [],
        icon: baseName,
        leaveCount: pi.leaves.length,
        layer: _path.split("/").indexOf(baseName.replace("/", "")),
        comparedTo: null
    }

    // menuItem.comparedTo = ((another: IMenuItemModal) => compare(this.link, another.link)).bind(menuItem)

    return menuItem
}

export function pathTreeToMenuTree(rootPaths: IPathInfo[], basePath: string): IMenuItemModal[] {
    let pathAndMenuItems: Map<string, IMenuItemModal> = new Map

    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let menuItem: IMenuItemModal = pathToMenu(pi, basePath)
        pathAndMenuItems.set(pi.path, menuItem)
        return pi.children
    })

    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let menuItem: IMenuItemModal = pathAndMenuItems.get(pi.path)
        menuItem.children = pi.children.map(childPath => pathAndMenuItems.get(childPath.path))
        return pi.children
    })

    return rootPaths.map(rp => pathAndMenuItems.get(rp.path))
}

export function LOAD_MENUS(rootPaths: IPathInfo[], basePath: string): IMenuItemModal[] {
    return pathTreeToMenuTree(rootPaths, basePath)
}

const MENUS: IMenuItemModal[] = []
const ROUTES: IRouteModal[] = []

export async function bootstrap(): Promise<ILayoutPros> {

    i("blogs.ts", "pid", process.pid)
    const CWD = process.cwd()
    const CACHE_PATH = _p.resolve(`${CWD}/cache.json`)
    if (await existsSync(CACHE_PATH)) {
        let cachedContent = (await fsp.readFile(CACHE_PATH)).toString()
        if (cachedContent.length > 0) {
            i("blogs.bootstrap", "cached!")
            return JSON.parse(cachedContent) as ILayoutPros
        }
    }

    const ROOT_PATH = _p.resolve(`${CWD}/blogs/`)
    const BASE_PATH = _p.resolve(`${CWD}/src/pages/`)
    i("blogs.ts", "CWD", CWD, "ROOT_PATH", ROOT_PATH, "BASE_PATH", BASE_PATH)

    const pathTree: IPathInfo[] = await LOAD_PATHS(ROOT_PATH)
    i("blogs.bootstrap", "pathTree", pathTree.map(p => p.path))

    const LAYOUT_PROS: ILayoutPros = { menus: MENUS, routeTree: ROUTES, routes: [] }
    try {
        const routeTree: IRouteModal[] = await pathTreeToRouteTree(pathTree, ROOT_PATH)
        i("blogs.bootstrap", "routes", routeTree.length)

        const routes: IRouteModal[] = deepTraverse(routeTree)
        i("blogs.bootstrap", "routes", routes.map(p => p._path))

        const menus: IMenuItemModal[] = pathTreeToMenuTree(pathTree, ROOT_PATH)
        i("blogs.bootstrap", "menus", menus.length)
        LAYOUT_PROS.menus = menus
        LAYOUT_PROS.routeTree = routeTree
        LAYOUT_PROS.routes = routes

        await fsp.writeFile(CACHE_PATH, jsf(LAYOUT_PROS))
    } catch (e) {
        i("blogs.bootstrap", "e", e)
    }
    return LAYOUT_PROS
}

