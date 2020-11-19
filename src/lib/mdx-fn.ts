// import matter from "gray-matter"
import _ from "lodash"
import * as unified from "unified"
import { Node, Parent } from "unist"
import renderToString from "next-mdx-remote/render-to-string"
import { MDX_COMPONENTS } from "../components/mdx-ui"
import { i } from "./commons"
const _attr = require("remark-attr")
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")
const removeImports = require("remark-mdx-remove-imports")
const removeExports = require("remark-mdx-remove-exports")
const remarkMatter = require("remark-frontmatter")
const _mdx = require("@mdx-js/mdx")


const rExcerpt: RegExp = /<!--+\s*more\s*--+>/i

export async function mdxStrToHtml(mdxStr: string): Promise<string> {
    // i("mdx-fn.ts", "mdxStr", mdxStr)
    if (_.isEmpty(mdxStr)) return null

    // const { content, data } = matter(mdxStr)
    const rendered = await renderToString(mdxStr, {
        components: MDX_COMPONENTS,
        // Optionally pass remark/rehype plugins
        mdxOptions: DEFAULT_OPTIONS,
        // scope: data,
    })
    // i(__filename, "content", content, "renderToString", rendered)
    return rendered["renderedOutput"]
}

const DEFAULT_OPTIONS = {
    footnotes: true,
    remarkPlugins: [_attr, remarkMath, removeImports, removeExports, remarkMatter],
    rehypePlugins: [rehypeKatex],
    compilers: []
}
export const mdxCompiler: unified.Processor = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS)

export async function loadExcerpt(root: Parent, mdxStr: string): Promise<string> {
    let excerptTag: Node = root.children.find((child: Node) => child["value"] && rExcerpt.test(child["value"] as string))
    if (excerptTag == null)
        return ""

    const excerptStr: string = mdxStr.substring(0, excerptTag.position.start.offset)
    // const _matter: matter.GrayMatterFile<string> = matter(excerptStr)
    const x = await mdxStrToHtml(excerptStr)
    i("blog.ts", "mdx", typeof x, x)

    // return _.get(x, "renderedOutput")
    return x
}

export async function getMetaAndExcerptFromMDX(mdxStr: string): Promise<[any, string]> {
    const root: Parent = mdxCompiler.parse(mdxStr) as Parent
    const children: Node[] = root.children

    let excerptMdxStr: string = ""

    let excerptIndex: number = children.findIndex((child: Node) => child["value"] && rExcerpt.test(child["value"] as string))
    let excerptNodes: Node[] = children.slice(0, Math.max(excerptIndex, 1))

    let matterNode: Node = excerptNodes.find((child: Node) => child.type = "yaml")
    let excerptHead: Node = _.first(excerptNodes)
    let excerptTail: Node = _.last(excerptNodes)

    if (matterNode && excerptNodes.length != 1) {
        if (matterNode === excerptNodes[0]) excerptMdxStr = mdxStr.substring(matterNode.position.end.offset, excerptTail.position.end.offset)
        else excerptMdxStr = mdxStr.substring(excerptHead.position.start.offset, matterNode.position.start.offset)
            + mdxStr.substring(matterNode.position.end.offset, excerptTail.position.end.offset)
    }

    return [matterNode.data, await mdxStrToHtml(excerptMdxStr)]
}

function loadMatter(mdxNode: Node): any & { start: number, end: number } {
    let children: Node[] = mdxNode["children"] as Node[]
    if (_.isEmpty(children)) return { start: -1, end: -1 }

    let matterNode: Node = children.find((child: Node) => child.type = "yarml")
    return { start: matterNode.position.start.offset, end: matterNode.position.end.offset, ...matterNode.data }
}

function loadMeta(mdxNode: Node): any & { start: number, end: number } {
    let children: Node[] = mdxNode["children"] as Node[]
    if (_.isEmpty(children)) return { start: -1, end: -1 }

    let exportNode: Node = children.find((child: Node) => child.type === "export" && (child["value"] as string || "").indexOf("meta") >= 0)
    if (_.isEmpty(exportNode))
        return {}

    let exportStr: string = exportNode["value"] as string
    if (!exportStr) {
        return {}
    }
    let matches = exportStr.match(/\{.*\}/)
    let content: string = _.isEmpty(matches) ? "{}" : matches[0]
    let meta = JSON.parse(content)
    meta["start"] = exportNode.position.start
    meta["end"] = exportNode.position.end
    return meta
}