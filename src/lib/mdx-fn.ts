import matter from "gray-matter"
import _ from "lodash"
import renderToString from "next-mdx-remote/render-to-string"
import { MDX_COMPONENTS } from "../components/mdx-ui"
import { i } from "./commons"
const _attr = require("remark-attr")
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")
const removeImports = require("remark-mdx-remove-imports")

export async function mdxStrToHtml(mdxStr: string): Promise<string> {
    // i("mdx-fn.ts", "mdxStr", mdxStr)
    if (_.isEmpty(mdxStr)) return null

    const { content, data } = matter(mdxStr)
    const rendered = await renderToString(content, {
        components: MDX_COMPONENTS,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [_attr, remarkMath, removeImports],
            rehypePlugins: [rehypeKatex],
        },
        // scope: data,
    })
    // i(__filename, "content", content, "renderToString", rendered)
    return rendered["renderedOutput"]
}