import { promises as fsp } from "fs"
import { Dictionary } from "lodash"
import * as _p from "path"
import { getMDXMeta, isMDX, LOAD_PATHS, pathTreeToMenuTree, pathTreeToRouteTree } from "./lib/blogs"
import { deepTraverse, e, i, jsf } from "./lib/commons"
import { IMenuItemModal, IPathInfo, IRouteModal, TMarkdownMetaInfo } from "./types"

// const sitemap = require("nextjs-sitemap-generator")

// async function genSitemap(): Promise<void> {
//     const BUILD_ID: string = fs.readFileSync(".next/BUILD_ID").toString()
//     sitemap({
//         baseUrl: "https://cfcodefans.github.io",
//         pagesDirectory: _p.resolve(`${CWD}/.next/server/pages`),
//         targetDirectory: "public/",
//         ignoredExtensions: ["js", "map"],
//         ignoredPaths: ["[fallback]"]
//     })
// }



async function genSitemap(routes: IRouteModal[]): Promise<void> {
    // const SITEMAP_NS_URL: string = "http://www.sitemaps.org/schemas/sitemap/0.9"
    // const xmlDoc: Document = new Document()
    // const _urlset: Element = xmlDoc.createElementNS(SITEMAP_NS_URL, "urlset")
    // _urlset.attributes.setNamedItemNS

}

const CWD: string = process.cwd()
const FILE_NAME: string = "blog-loader.ts"

async function main(): Promise<void> {
    i(FILE_NAME, "pid", process.pid)

    const BASE_PATH = _p.resolve(`${CWD}/src/pages/`)
    const DATA_PATH: string = _p.resolve(`${CWD}/src/data/`)
    const basePath: string = BASE_PATH
    i(FILE_NAME, "CWD", CWD, "basePath", basePath, "DATA_PATH", DATA_PATH)

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
            fsp.writeFile(_p.resolve(DATA_PATH + "/route-tree.json"), jsf(routeTree), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(DATA_PATH + "/routes.json"), jsf(routes), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(DATA_PATH + "/markdown-meta.json"), jsf(pathToMarkdowns), OVERWRITE_FLAG),
            fsp.writeFile(_p.resolve(DATA_PATH + "/menus.json"), jsf(menus), OVERWRITE_FLAG),
            genSitemap(routes)
        ])

    } catch (ex) {
        e(FILE_NAME, "error occurs in loading blogs", ex)
        throw ex
    }
}

main().then(() => i(FILE_NAME, "finished"))