import * as _ from "lodash"
import { promises as fsp, PathLike, Dirent, readdir, readFileSync, Stats } from "fs"
import * as _p from "path"
import * as unified from "unified"
import { Node, Parent } from "unist"
import { async } from "q"
const _mdx = require("@mdx-js/mdx")

import { deepTraverse } from "../src/commons"

// import MDX from '@mdx-js/runtime'

type RouteModal = {
    path: string
    template: string
    children?: RouteModal[]
    data?: any
}

type PathInfo = { isFile: boolean, path: string }

describe("get mdx metadata", () => {
    const mdxPath: string = _p.resolve(`${__dirname}/../src/pages/blogs/tech/web/react-static/react-static-intro.mdx`)
    console.info(`reading from path:\n\t ${mdxPath}`)
    const mdxStr: string = readFileSync(mdxPath, { encoding: "utf-8" })
    console.info(`mdxStr:\n\t${mdxStr}\n\t`)

    it.skip("try compile", () => {
        const mdxContent = _mdx.sync(mdxStr)
        console.info(`${typeof (mdxContent)}\n\t${mdxContent}`)
    })

    function getMeta(mdxNode: Node): any {
        let children: Node[] = mdxNode["children"] as Node[]
        if (!children || children.length == 0) return {}
        let exportNode: Node = children.find((child: Node) => child.type === "export")
        if (!(exportNode && typeof (exportNode["value"]) === "string")) return {}
        let exportStr: string = exportNode["value"] as string
        let content: string = exportStr.match(/\{.*\}/)[0]
        console.info(`export content:\n\t${content}`)
        return JSON.parse(content)
    }

    const rExcerpt: RegExp = /<!--+\s*more\s*--+>/i
    function loadExcerpt(root: Parent, mdxStr: string): string {
        let excerptTag: Node = root.children.find((child: Node) => child["value"] && rExcerpt.test(child["value"] as string))
        if (excerptTag == null)
            return ""

        return mdxStr.substring(0, 118)
    }

    it("try parse", () => {
        const DEFAULT_OPTIONS = {
            footnotes: true,
            remarkPlugins: [],
            rehypePlugins: [],
            compilers: []
        }
        const compiler: unified.Processor = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS)
        console.info(`${typeof compiler}\n\t${JSON.stringify(compiler)}`)
        const mdxContent: Node = compiler.parse(mdxStr)
        console.info(`${typeof (mdxContent)}\n\t${JSON.stringify(mdxContent, null, '    ')}`)
        let meta = getMeta(mdxContent)
        console.info(`${typeof (meta)}\n\t${JSON.stringify(meta, null, ' ')}`)
        let excerpt: string = loadExcerpt(mdxContent as Parent, mdxStr)
        console.info(`\n\t excerpt is \n\n${excerpt}`)
    })
})

describe("list folder", () => {

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

    function getMDXMeta(mdxStr: string): any {
        const mdxContent: Node = compiler.parse(mdxStr)
        return loadMeta(mdxContent)
    }

    async function ls(path: string): Promise<PathInfo[]> {
        let ds: Dirent[] = await fsp.readdir(path, { withFileTypes: true })
        return Promise.resolve(ds.map(d => ({ isFile: d.isFile(), path: _p.resolve(path, d.name) })))
    }

    async function pathInfo(path: string): Promise<PathInfo> {
        let fstats: Stats = await fsp.stat(`${_p.resolve(path)}`)
        return Promise.resolve({ isFile: fstats.isFile(), path: path })
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
    async function pathToRouteModal(pi: PathInfo, basePath: string): Promise<RouteModal> {
        let path: string = _p.relative(basePath, pi.path)
        let template: string = pi.isFile ? path : "src/pages/blog_list"
        let children: RouteModal[] = pi.isFile ? null : []
        let data: any = []

        if (pi.isFile && _p.extname(pi.path) == '.mdx') {
            data = getMDXMeta(await fsp.readFile(pi.path, "utf-8"))
        }

        return {
            path,
            template,
            children,
            data
        }
    }

    async function LOAD_ROUTES(_path: string): Promise<RouteModal[]> {
        let pathAndRoutes: Map<string, RouteModal> = new Map()

        let rootPathInfo: PathInfo = await pathInfo(_path)
        pathAndRoutes.set(_path, await pathToRouteModal(rootPathInfo, _path))

        await walk(_path, async (currentPath: PathInfo, pis: PathInfo[]) => {
            let parentRoute: RouteModal = pathAndRoutes.get(currentPath.path)

            for (let pi of pis) {
                let route: RouteModal = await pathToRouteModal(pi, _path)
                pathAndRoutes.set(pi.path, route)
                parentRoute.children && parentRoute.children.push(route)
                parentRoute.data && (parentRoute.data as any[]).push(route)
            }
            return pis
        })
        return [...pathAndRoutes.get(_path).children]
    }

    it.skip("listing folder 1", async () => {
        const ROOT_PATH: string = _p.resolve(`${__dirname}/../src/pages/blogs`)
        console.info([...await walk(ROOT_PATH)].map(pi => JSON.stringify(pi)).join("\n\t"))
        let routes: RouteModal[] = await LOAD_ROUTES(ROOT_PATH)
        console.info(JSON.stringify(routes, null, "    "))
    })

    function routeToMenuItem(route: RouteModal): MenuItemModal {
        return {
            label: _p.basename(route.path),
            link: route.path,
            children: [],
            icon: _p.basename(route.path)
        }
    }

    type MenuItemModal = {
        label: string
        link: string
        children: MenuItemModal[]
        icon: string
    }

    async function TO_MENUS(routes: RouteModal[]): Promise<MenuItemModal[]> {
        if (!(routes && routes.length > 0)) return []

        const routeStack: RouteModal[] = [...routes] //list.filter(pi => pi.dirent.isDirectory())
        const linkAndMenuItems: Map<string, MenuItemModal> = new Map()
        routes.map(r => routeToMenuItem(r)).forEach(m => linkAndMenuItems.set(m.link, m))

        while (routeStack.length != 0) {
            let currentRoute: RouteModal = routeStack.pop()
            let menuItemModal: MenuItemModal = linkAndMenuItems.get(currentRoute.path)

            let routeChildren: RouteModal[] = currentRoute.children
            const subDirs: RouteModal[] = routeChildren.filter(r => !_.isEmpty(r.children))

            menuItemModal.children.push(...subDirs.map(r => routeToMenuItem(r)))
            menuItemModal.children.forEach(subMenuItem => linkAndMenuItems.set(subMenuItem.link, subMenuItem))
            routeStack.push(...subDirs)
        }
        return Promise.resolve(routes.map(r => linkAndMenuItems.get(r.path)))
    }

    it.skip("routes to menus", async () => {
        const ROOT_PATH: string = _p.resolve(`${__dirname}/../src/pages/blogs`)
        let routes: RouteModal[] = await LOAD_ROUTES(ROOT_PATH)
        let menus: MenuItemModal[] = await TO_MENUS(routes)
        console.info(JSON.stringify(menus, null, "    "))
    })
})

describe("final test", () => {
    it.skip("get routes", async () => {
        const ROOT_PATH = _p.resolve(`${__dirname}/../src/pages/blogs`)
        const BASE_PATH = _p.resolve(`${__dirname}/../src/pages/`)
        const { LOAD_ROUTES, LOAD_MENUS } = require("../src/data-loader.ts")
        let routes = await LOAD_ROUTES(ROOT_PATH, BASE_PATH)
        // console.info(JSON.stringify(routes, null, "  "))
        let menus = await LOAD_MENUS(routes)
        // console.info(JSON.stringify(menus, null, "  "))

        console.info(deepTraverse(menus))
    })
})


