import { promises as fsp } from "fs"
import { Dictionary } from "lodash"
import * as _p from "path"
import { getMDXMeta, isMDX, LOAD_PATHS, pathTreeToMenuTree, pathTreeToRouteTree } from "lib/blogs"
import { deepTraverse, i, jsf } from "lib/commons"
import { IMenuItemModal, IPathInfo, IRouteModal, TMarkdownMetaInfo } from "types"

const CWD: string = process.cwd()
const FILE_NAME: string = "blog-loader.ts"

async function main(): Promise<void> {
    i(FILE_NAME, "pid", process.pid)

    const BASE_PATH = _p.resolve(`${CWD}/src/pages/`)
    const CACHE_PATH: string = _p.resolve(`${CWD}/src/cache/`)
    const basePath: string = BASE_PATH
    i(FILE_NAME, "CWD", CWD, "basePath", basePath, "CACHE_PATH", CACHE_PATH)

    const pathTree: IPathInfo[] = await LOAD_PATHS(basePath)
    i(FILE_NAME, "pathTree", pathTree.map(p => p.path))

    const paths: IPathInfo[] = deepTraverse(pathTree)
    i(FILE_NAME, "paths", paths.map(p => p.path))

    try {
        const routeTree: IRouteModal[] = pathTreeToRouteTree(pathTree, basePath)
        i(FILE_NAME, "routeTree", routeTree.length)

        const routes: IRouteModal[] = deepTraverse(routeTree)
        i(FILE_NAME, "routes", routes.map(p => p._path))

        const mdMetas: TMarkdownMetaInfo[] = await Promise.all(
            paths.filter(p => isMDX(p))
                .map(p => getMDXMeta(_p.relative(basePath, p.path).replace(/\\/g, "/"), p.path)))
        const pathToMarkdowns: Dictionary<TMarkdownMetaInfo> = mdMetas.reduce((dict, md) => (dict["/" + md.path] = md, dict), {})
        i(FILE_NAME, "mdMetas", mdMetas.map(p => p.path))

        const menus: IMenuItemModal[] = pathTreeToMenuTree(pathTree.filter(p => !p.path.endsWith(".mdx")), basePath)
        i(FILE_NAME, "menus", menus.length)

        const OVERWRITE_FLAG = { flag: "w+" }

        await Promise.all([
            fsp.writeFile(_p.resolve(CACHE_PATH + "/route-tree.json"), jsf(routeTree), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(CACHE_PATH + "/routes.json"), jsf(routes), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(CACHE_PATH + "/mdMetas.json"), jsf(pathToMarkdowns), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(CACHE_PATH + "/menus.json"), jsf(menus), OVERWRITE_FLAG)])

    } catch (e) {
        throw e
    }
}

main().then(() => i(FILE_NAME, "finished"))