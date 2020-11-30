import { IMenuItemModal, IPathInfo, IRouteModal, TMarkdownMetaInfo } from "./types"
// import * as routes from "./cache/routes.json"
import { i } from "./lib/commons"


const CWD: string = process.cwd()
const FILE_NAME: string = "workshop.ts"

async function genSitemap(routes: IRouteModal[]): Promise<void> {
    const SITEMAP_NS_URL: string = "http://www.sitemaps.org/schemas/sitemap/0.9"
    const xmlDoc: Document = new Document()
    const _urlset: Element = xmlDoc.createElementNS(SITEMAP_NS_URL, "urlset")

    const serializer = new XMLSerializer()
    i(FILE_NAME, serializer.serializeToString(xmlDoc))
}

async function main(): Promise<void> {
    await genSitemap([])
}

main().then(() => i(FILE_NAME, "finished"))