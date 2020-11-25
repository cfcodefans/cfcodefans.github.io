import { NextRouter, useRouter } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import React, { ReactNode } from "react"
import { compare } from "../lib/commons"
import { TMarkdownMetaInfo } from "../types"

export function BlogList({ mds }: { mds: TMarkdownMetaInfo[] }): JSX.Element {
    return <div className="w-100 d-flex flex-column">
        {mds.sort((md1, md2) => compare(md1.modifiedAt, md2.modifiedAt))
            .map((mt, i) => <BlogItem key={i} {...mt}></BlogItem>)}
    </div>
}

export function BlogItem(props: TMarkdownMetaInfo): JSX.Element {
    let excerpt: string = props.excerpt
    let meta: any = props.meta
    let _link: string = props.path
    _link = _link.substring(0, _link.lastIndexOf(".mdx"))

    // const display = hydrate(excerpt, MDX_COMPONENTS)

    return (<article className="blog-item d-flex flex-column align-items-center rounded-1 shadow container pt-3 mt-3 mb-3">
        <header className="text-center">
            <h1>{meta["title"]}</h1>
            <div>Created at: <time dateTime={props.createdAt}>{props.createdAt}</time> | By: {meta && meta["authors"]}</div>
        </header>
        <hr />
        {/* <div>{display}</div> */}
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        <Link href={`/${_link}`}>
            <a><h3>read more »</h3></a>
        </Link>
    </article>)
}

export function BlogHeader(props: TMarkdownMetaInfo): JSX.Element {
    const { meta } = props
    const { og } = meta
    const router: NextRouter = useRouter()

    return <header className="text-center">
        <Head>
            <title>cfcodefans: {meta["title"]}</title>
            <meta property="og:url" content={`https://cfcodefans.github.io${router.asPath}`} key="url" />
            <meta property="og:title" content={meta["title"]} key="title" />
            <meta name="description" content={meta["desc"] || meta["title"]} key="description" />
            <meta name="keywords" content={meta["tags"]} />
            {og && Object.keys(og).map(k => <meta property={`og:${k}`} content={og[k]} key={k} />)}
        </Head>
        <h3>{meta["title"]}</h3>
        <div>
            Created at: <time dateTime={props.createdAt}>{props.createdAt}</time>
            &nbsp;|&nbsp;By: {meta && meta["authors"]}
            &nbsp;|&nbsp;At: <a href={`https://github.com/cfcodefans/cfcodefans.github.io/blob/with-nextjs/src/pages${router.asPath}.mdx`}>Source</a>
        </div>
    </header>
}

export function BlogArticle({ content, metaInfo }: { content: ReactNode, metaInfo: TMarkdownMetaInfo }): JSX.Element {
    return <article className="d-flex flex-column align-items-center container pt-3 mt-3 mb-3">
        <BlogHeader {...metaInfo} />
        <main className="text-wrap text-break w-100">
            {content}
        </main>
    </article>
}

export default function CustomLink({ as, href, children, ...otherProps }: { children: ReactNode, as: string, href: string }): JSX.Element {
    return <Link as={as} href={href}>
        <span>
            <a {...otherProps} href={href}>{children}</a> &nbsp;
            <a {...otherProps} href={href} target="_blank">[+]</a>
        </span>
    </Link>
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
export const MDX_COMPONENTS = {
    a: CustomLink,
    // VisxTests_BarGraph: () => import("./lab/visx-tests"),
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    //   TestComponent: dynamic(() => import('../../components/TestComponent')),
    Head,
}