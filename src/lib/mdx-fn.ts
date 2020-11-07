import MDX from "@mdx-js/runtime"
import { i } from "./commons"
import ReactDOMServer from 'react-dom/server';

export function mdxStrToHtmlStr(mdxStr: string): string {
    const x = MDX({ children: mdxStr })
    const _x = ReactDOMServer.renderToString(x)
    i("mdx-fn.tsx", "x", _x)
    return _x
}