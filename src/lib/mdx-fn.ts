import MDX from "@mdx-js/runtime"
import matter from "gray-matter"
import _ from "lodash"
import renderToString from "next-mdx-remote/render-to-string"
import ReactDOMServer from "react-dom/server"
import { MDX_COMPONENTS } from "../components/mdx-ui"


export function mdxStrToHtmlStr(mdxStr: string): string {
    const x = MDX({ children: mdxStr })
    const _x = ReactDOMServer.renderToString(x)
    // i("mdx-fn.tsx", "x", _x)
    return _x
}

export async function mdxStrToHtml(mdxStr: string): Promise<string> {
    // i("mdx-fn.ts", "mdxStr", mdxStr)
    if (_.isEmpty(mdxStr)) return null
    
    const { content, data } = matter(mdxStr)
    return renderToString(content, {
        MDX_COMPONENTS,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        // scope: data,
    })
}