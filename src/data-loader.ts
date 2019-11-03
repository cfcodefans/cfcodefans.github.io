import { Dirent, promises as fsp, Stats, link } from "fs"
import * as _ from "lodash"
import * as _p from "path"
import * as unified from "unified"
import { Node, Parent } from "unist"
import { compare } from "./commons"

const _mdx = require("@mdx-js/mdx")

const rExcerpt: RegExp = /<!--+\s*more\s*--+>/i

type RouteModal = {
    path: string
    _path: string
    template: string
    children?: RouteModal[]
    data?: any | any[]
    getData: () => any
}

export type PathInfo = { isFile: boolean, path: string }

export type MarkdownMetaInfo = { excerpt: string, meta: any, path: string }

async function pathInfo(path: string): Promise<PathInfo> {
    let fstats: Stats = await fsp.stat(`${_p.resolve(path)}`)
    return Promise.resolve({ isFile: fstats.isFile(), path: path })
}

async function ls(path: string): Promise<PathInfo[]> {
    let ds: Dirent[] = await fsp.readdir(path, { withFileTypes: true })
    return Promise.resolve(ds.map(d => ({ isFile: d.isFile(), path: _p.resolve(path, d.name) })))
}

async function walk(rootPath: string, visitor?: (currentPath: PathInfo, pis: PathInfo[]) => Promise<PathInfo[]>): Promise<PathInfo[]> {
    const list: PathInfo[] = []
    const pathStack: PathInfo[] = [await pathInfo(rootPath)] //list.filter(pi => pi.dirent.isDirectory())

    while (pathStack.length != 0) {
        let currentPath: PathInfo = pathStack.pop()
        let subPaths: PathInfo[] = await ls(currentPath.path)
        subPaths = visitor ? await visitor(currentPath, subPaths) : subPaths
        list.push(...subPaths)
        pathStack.push(...subPaths.filter(pi => !pi.isFile))
    }

    return Promise.resolve(list)
}

const DEFAULT_OPTIONS = {
    footnotes: true,
    remarkPlugins: [],
    rehypePlugins: [],
    compilers: []
}
const compiler: unified.Processor = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS)

function loadMeta(mdxNode: Node): any {
    let children: Node[] = mdxNode["children"] as Node[]
    if (_.isEmpty(children))
        return {}

    let exportNode: Node = children.find((child: Node) => child.type === "export" && (child["value"] as string || "").indexOf("meta") >= 0)
    if (_.isEmpty(exportNode))
        return {}

    let exportStr: string = exportNode["value"] as string
    let content: string = exportStr.match(/\{.*\}/)[0]
    return JSON.parse(content)
}

function loadExcerpt(root: Parent, mdxStr: string): string {
    let excerptTag: Node = root.children.find((child: Node) => child["value"] && rExcerpt.test(child["value"] as string))
    if (excerptTag == null)
        return ""

    return mdxStr.substring(0, 118)
}

function getMDXMeta(path:string, mdxStr: string): MarkdownMetaInfo {
    const mdxContent: Node = compiler.parse(mdxStr)
    return { meta: loadMeta(mdxContent), excerpt: loadExcerpt(mdxContent as Parent, mdxStr), path }
}

async function LOAD_ROUTES(_path: string, basePath: string): Promise<RouteModal[]> {
    let pathAndRoutes: Map<string, RouteModal> = new Map()

    let rootPathInfo: PathInfo = await pathInfo(_path)
    pathAndRoutes.set(_path, await pathToRouteModal(rootPathInfo, basePath))

    await walk(_path, async (currentPath: PathInfo, pis: PathInfo[]) => {
        let parentRoute: RouteModal = pathAndRoutes.get(currentPath.path)

        for (let pi of pis) {
            let route: RouteModal = await pathToRouteModal(pi, basePath)
            pathAndRoutes.set(pi.path, route)
            parentRoute.children && parentRoute.children.push(route)
            parentRoute.data && (parentRoute.data as any[]).push(route.data)
        }
        return pis
    })
    return [pathAndRoutes.get(_path)]
}

export type MenuItemModal = {
    label: string
    link: string
    children: MenuItemModal[]
    icon: string
    layer: number
}

async function pathToRouteModal(pi: PathInfo, basePath: string): Promise<RouteModal> {
    let _path: string = _p.relative(basePath, pi.path).replace(/\\/g, "/")
    let path: string = `/${_p.basename(_path)}`
    let template: string = pi.isFile ? _p.resolve(basePath, _path) : "src/pages/blog_list"
    let children: RouteModal[] = pi.isFile ? null : []
    let data: any[] = []

    if (pi.isFile && /.mdx?$/.test(_p.extname(pi.path))) {
        console.info(`loading markdown meta for ${pi.path}`)
        data = [getMDXMeta(_path, await fsp.readFile(pi.path, "utf-8"))]
    }

    function getData() {
        return _.flattenDeep(this.data)
    }

    let route: RouteModal = {
        path,
        _path,
        template,
        children,
        data,
        getData: null
    }

    route.getData = getData.bind(route)

    return route
}

function routeToMenuItem(route: RouteModal): MenuItemModal {
    return {
        label: _p.basename(route._path),
        link: route._path,
        children: [],
        icon: _p.basename(route.path),
        layer: route._path.split("/").indexOf(route.path.replace("/", ""))
    }
}

async function TO_MENUS(routes: RouteModal[]): Promise<MenuItemModal[]> {
    if (!(routes && routes.length > 0)) return []

    const routeStack: RouteModal[] = [...routes] //list.filter(pi => pi.dirent.isDirectory())
    const linkAndMenuItems: Map<string, MenuItemModal> = new Map()
    routes.map(r => routeToMenuItem(r)).forEach(m => linkAndMenuItems.set(m.link, m))

    while (routeStack.length != 0) {
        let currentRoute: RouteModal = routeStack.pop()
        let menuItemModal: MenuItemModal = linkAndMenuItems.get(currentRoute._path)

        let routeChildren: RouteModal[] = currentRoute.children
        const subDirs: RouteModal[] = routeChildren.filter(r => !_.isEmpty(r.children))

        menuItemModal.children.push(
            ...subDirs.map(r => routeToMenuItem(r))
                .sort((m1, m2) => compare(m1.label, m2.label)))
        menuItemModal.children.forEach(subMenuItem => linkAndMenuItems.set(subMenuItem.link, subMenuItem))
        routeStack.push(...subDirs)
    }
    return Promise.resolve(
        routes.map(r => linkAndMenuItems.get(r._path))
            .sort((m1, m2) => compare(m1.label, m2.label)))
}

async function LOAD_MENUS(routes: RouteModal[]): Promise<MenuItemModal[]> {
    return await TO_MENUS(routes)
}

exports.LOAD_ROUTES = LOAD_ROUTES
exports.LOAD_MENUS = LOAD_MENUS