import MDX from "@mdx-js/runtime"
import matter from "gray-matter"
import _ from "lodash"
import renderToString from "next-mdx-remote/render-to-string"
import ReactDOMServer from "react-dom/server"
import { MDX_COMPONENTS } from "../components/mdx-ui"
const _attr = require("remark-attr")
const remarkMath = require("remark-math")
const rehypeKatex = require("rehype-katex")

export async function mdxStrToHtml(mdxStr: string): Promise<string> {
    // i("mdx-fn.ts", "mdxStr", mdxStr)
    if (_.isEmpty(mdxStr)) return null

    const { content, data } = matter(mdxStr)
    return renderToString(content, {
        components: MDX_COMPONENTS,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [_attr, remarkMath],
            rehypePlugins: [rehypeKatex],
        },
        // scope: data,
    })
}