import matter from "gray-matter"
import _ from "lodash"
import * as unified from "unified"
import renderToString from "next-mdx-remote/render-to-string"
import { MDX_COMPONENTS } from "../components/mdx-ui"
import { i } from "./commons"
const _attr = require("remark-attr")
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")
const removeImports = require("remark-mdx-remove-imports")
const _mdx = require("@mdx-js/mdx")

export async function mdxStrToHtml(mdxStr: string): Promise<string> {
    // i("mdx-fn.ts", "mdxStr", mdxStr)
    if (_.isEmpty(mdxStr)) return null

    const { content, data } = matter(mdxStr)
    const rendered = await renderToString(content, {
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
    remarkPlugins: [_attr, remarkMath, removeImports],
    rehypePlugins: [rehypeKatex],
    compilers: []
}
export const mdxCompiler: unified.Processor = _mdx.createMdxAstCompiler(DEFAULT_OPTIONS)