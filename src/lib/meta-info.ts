import type { NextApiRequest, NextApiResponse } from "next"
import { ILayoutPros, IMenuItemModal, IPathInfo, IRouteModal, TMarkdownMetaInfo } from "types"
import { getMDXMeta, isMDX, LOAD_PATHS, pathTreeToMenuTree, pathTreeToRouteTree } from "lib/blogs"
import { FSWatcher, watch } from "fs"
import { deepTraverse, e, i } from "lib/commons"
import { Dictionary } from "lodash"

import * as _p from "path"

const CWD: string = process.cwd()
const FILE_NAME: string = "/pages/api/meta-info.ts"
const CACHE_PATH: string = _p.resolve(`${CWD}/src/data/`)


class LayoutPros implements ILayoutPros {
    constructor(public menus: IMenuItemModal[] = [],
        public routeTree: IRouteModal[] = [],
        public routes: IRouteModal[] = [],
        public pathToMarkdowns: Dictionary<TMarkdownMetaInfo> = {}) {
    }

    public static async create(basePath: string): Promise<LayoutPros> {
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

            return new LayoutPros(menus, routeTree, routes, pathToMarkdowns)
        } catch (e) {
            e(FILE_NAME, "error occurs in loading blogs", e)
            throw e
        }
    }
}

(async () => {
    try {
        const watcher: FSWatcher = await watch("./src/pages/", { recursive: true })
        watcher.on("change", (eventType: string, filename: string | Buffer) => {
            i(FILE_NAME, "eventType", eventType, "filename", filename)
        })
    } catch (err) {
        e("failed to watch file system", err)
    }
})()

const layoutPros: LayoutPros = await LayoutPros.create("./src/pages/")

export default function handler(req: NextApiRequest, res: NextApiResponse<ILayoutPros>) {
    i(FILE_NAME, req.method, req.url)
    res.status(200).json(layoutPros)
}