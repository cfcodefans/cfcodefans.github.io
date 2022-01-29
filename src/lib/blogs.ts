import { format } from "date-fns"
import { Dirent, promises as fsp } from "fs"
// import matter from "gray-matter"
import _ from "lodash"
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from "next"
import * as _p from "path"
import path, { extname } from "path"
import { ILayoutPros, IMenuItemModal, IPathInfo, IRouteModal, TMarkdownMetaInfo } from "../types"
import { compare, deepTraverse, getNameAndExt, i, ISO_DATE_FMT, iterateTree_a, jsf } from "./commons"
import { getMetaAndExcerptFromMDX } from "./mdx-fn"


const BLOGS_DIR: string = path.join(process.cwd(), "blogs")

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

export function isMDX(pi: IPathInfo): boolean {
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

    return results.filter(p => extname(p.path) == "" || isMDX(p))
}

export async function LOAD_PATHS(_path: string): Promise<IPathInfo[]> {
    let rootPaths: IPathInfo[] = await ls(_path)
    return await searchBlogs(rootPaths)
}

export async function getMDXMeta(path: string, filePath: string): Promise<TMarkdownMetaInfo> {
    try {
        const [fileStats, mdxStr] = await Promise.all([fsp.lstat(filePath), fsp.readFile(filePath, "utf-8")])
        // const mdxContent: Node = mdxCompiler.parse(mdxStr)

        // const _matter: matter.GrayMatterFile<string> = matter(mdxStr) // loadMeta(mdxContent)
        // i("blogs.ts", "mdxStr", mdxStr, "_matter", jsf(_matter.data))
        const [metaData, excerpt] = await getMetaAndExcerptFromMDX(mdxStr)

        return {
            meta: metaData,
            excerpt: excerpt,
            path,
            createdAt: format(fileStats.birthtime, ISO_DATE_FMT),
            modifiedAt: format(fileStats.ctime, ISO_DATE_FMT)//yyyy-MM-dd'T'HH:mm:ss.SSSxxx
        }
    } catch (e) {
        i("blogs.ts", "failed to get meta for", filePath)
        throw e
    }
}

export function pathToRouteModal(pi: IPathInfo, basePath: string): IRouteModal {
    let _path: string = "/" + _p.relative(basePath, pi.path).replace(/\\/g, "/")
    let path: string = `/${_p.basename(_path)}`
    let children: IRouteModal[] = pi.isFile ? null : []

    // function getData() {
    //     return _.flattenDeep(this.data)
    // }

    let route: IRouteModal = {
        path,
        _path,
        children,
        offsprings: isMDX(pi) ? [_path] : [],
        childrenCount: 0,
        comparedTo: null
    }

    return route
}

export function pathTreeToRouteTree(rootPaths: IPathInfo[], basePath: string): IRouteModal[] {
    if (_.isEmpty(rootPaths)) return []

    let pathAndRouteModals: Map<string, IRouteModal> = new Map
    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let route: IRouteModal = pathToRouteModal(pi, basePath)
        pathAndRouteModals.set(pi.path, route)
        return pi.children
    })

    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let route: IRouteModal = pathAndRouteModals.get(pi.path)
        route.children = pi.children.map(childPath => pathAndRouteModals.get(childPath.path))
        route.offsprings = _.flatten(pi.leaves.map(childPath => pathAndRouteModals.get(childPath.path).offsprings))
        route.childrenCount = route.offsprings.length
        return pi.children
    })

    return rootPaths.map(rp => pathAndRouteModals.get(rp.path))
}

export function pathToMenu(pi: IPathInfo, basePath: string): IMenuItemModal {
    let _path: string = _p.relative(basePath, pi.path).replace(/\\/g, "/")
    let baseName: string = _p.basename(pi.path)
    let menuItem: IMenuItemModal = {
        label: baseName,
        link: _path,
        children: [],
        icon: baseName,
        leaveCount: pi.leaves.filter(lp => isMDX(lp)).length,
        layer: _path.split("/").indexOf(baseName.replace("/", "")),
        comparedTo: null
    }
    return menuItem
}

export function pathTreeToMenuTree(rootPaths: IPathInfo[], basePath: string): IMenuItemModal[] {
    let pathAndMenuItems: { [key: string]: IMenuItemModal } = {}

    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let menuItem: IMenuItemModal = pathToMenu(pi, basePath)
        pathAndMenuItems[pi.path] = menuItem
        return pi.children
    })

    deepTraverse(rootPaths, (pi: IPathInfo) => {
        let menuItem: IMenuItemModal = pathAndMenuItems[pi.path]
        // i("blogs.ts", "pi.path", pi.path, "pi.children", pi.leaves.map(cp => cp.path))
        menuItem.children = pi.children.map(childPath => pathAndMenuItems[childPath.path])
        return pi.children
    })

    // i("blogs.ts", "pathAndMenuItems", Object.values(pathAndMenuItems).map(m => m.link + "  " + m.leaveCount + "  " + m.children.length))

    return rootPaths.map(rp => pathAndMenuItems[rp.path])
}

export function LOAD_MENUS(rootPaths: IPathInfo[], basePath: string): IMenuItemModal[] {
    return pathTreeToMenuTree(rootPaths, basePath)
}

const MENUS: IMenuItemModal[] = []
const ROUTES: IRouteModal[] = []

export async function bootstrap(): Promise<ILayoutPros> {
    i("blogs.ts", "pid", process.pid)
    const CWD: string = process.cwd()

    const CACHE_PATH = _p.resolve(`${CWD}/cache.json`)
    // const isCached: boolean = existsSync(CACHE_PATH)
    // if (isCached) {
    //     let cachedContent = (await fsp.readFile(CACHE_PATH)).toString()
    //     if (cachedContent.length > 0) {
    //         i("blogs.bootstrap", "cached!")
    //         return JSON.parse(cachedContent) as ILayoutPros
    //     }
    // }

    const ROOT_PATH = _p.resolve(`${CWD}/blogs/`)
    const BASE_PATH = _p.resolve(`${CWD}/src/pages/`)

    const basePath: string = BASE_PATH
    i("blogs.ts", "CWD", CWD, "basePath", basePath)

    const pathTree: IPathInfo[] = await LOAD_PATHS(basePath)
    i("blogs.bootstrap", "pathTree", pathTree.map(p => p.path))

    const paths: IPathInfo[] = deepTraverse(pathTree)

    const layoutPros: ILayoutPros = { menus: MENUS, routeTree: ROUTES, pathToMarkdowns: {}, routes: [] }
    try {
        const routeTree: IRouteModal[] = pathTreeToRouteTree(pathTree, basePath)
        i("blogs.bootstrap", "routeTree", routeTree.length)
        layoutPros.routeTree = routeTree

        const routes: IRouteModal[] = deepTraverse(routeTree)
        i("blogs.bootstrap", "routes", routes.map(p => p._path))
        layoutPros.routes = routes

        const mdMetas: TMarkdownMetaInfo[] = await Promise.all(
            paths.filter(p => isMDX(p))
                .map(p => getMDXMeta(_p.relative(basePath, p.path).replace(/\\/g, "/"), p.path)))
        layoutPros.pathToMarkdowns = mdMetas.reduce((dict, md) => (dict["/" + md.path] = md, dict), {})

        const menus: IMenuItemModal[] = pathTreeToMenuTree(pathTree, basePath)
        i("blogs.bootstrap", "menus", menus.length)
        layoutPros.menus = menus

        await fsp.writeFile(CACHE_PATH, jsf(layoutPros))
    } catch (e: any) {
        i("blogs.bootstrap", "e", e)
        throw e
    }
    return layoutPros
}

export async function loadBlog(webPath: string): Promise<string> {
    const CWD: string = process.cwd()
    const ROOT_PATH = _p.resolve(`${CWD}/blogs/`)
    const _path: string = _p.resolve(ROOT_PATH, webPath)

    const mdxContent: string = await fsp.readFile(_path, "utf-8")
    // i("blog.ts", "_path", _path, mdxContent)
    return mdxContent
}

export async function _getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<any>> {
    const layoutProps: ILayoutPros = await bootstrap()

    const paths: string[] = layoutProps.routes
        .map(r => r._path)
        .filter(p => !p.endsWith(".mdx"))
        .map(p => {
            const [basePath, ext] = getNameAndExt(p)
            return basePath
        })
    i("[...entry].tsx", "layoutProps", layoutProps.routes.map(r => "/" + r._path),
        "mds", Object.keys(layoutProps.pathToMarkdowns),
        "paths", paths)

    return { paths, fallback: false }
}

export async function _getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
    i("index.tsx", "context", context)
    // const layoutProps: ILayoutPros = await bootstrap()
    // i("index.tsx", "layoutProps", [layoutProps.menus.length, layoutProps.routeTree.length])
    return { props: {} }
}