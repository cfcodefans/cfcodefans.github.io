import Head from "next/head"
import Link from "next/link"
import React, { ReactNode } from "react"
import { compare, jsf } from "../lib/commons"
import { TMarkdownMetaInfo } from "../types"
import hydrate from "next-mdx-remote/hydrate"

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

    const display = hydrate(excerpt, MDX_COMPONENTS)

    return (<article className="d-flex flex-column align-items-center rounded-1 shadow container pt-3 mt-3 mb-3">
        <header className="text-center">
            <h1>{meta["title"]}</h1>
            <div>Created at: <time dateTime={props.createdAt}>{props.createdAt}</time> | By: {meta && meta["authors"]}</div>
        </header>
        <hr />
        <div>{display}</div>
        <Link href={`/${_link}`}>
            <a><h3>read more »</h3></a>
        </Link>
    </article>)
}

export function BlogHeader(props: TMarkdownMetaInfo): JSX.Element {
    const { meta } = props
    return <header className="text-center">
        <Head>
            {meta["desc"] && <meta name="description" content={meta["desc"]} />}
            <meta name="keywords" content={meta["tags"]} />
        </Head>
        <h3>{meta["title"]}</h3>
        <div>Created at: <time dateTime={props.createdAt}>{props.createdAt}</time> | By: {meta && meta["authors"]}</div>
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


export function MDX_Header(mdMate: TMarkdownMetaInfo): JSX.Element {
    const meta: any = mdMate.meta

    return (<header>
        <Head>
            <title>{meta["title"]}</title>
            <meta name="description" content={meta["desc"]} />
            <meta name="keywords" content={meta["tags"]} />
        </Head>
        <h1>{meta["title"]}</h1>
        <div>Created at: {mdMate.createdAt} | Modified at: {mdMate.modifiedAt}</div>
    </header>)
}

export default function CustomLink({ as, href, children, ...otherProps }: { children: ReactNode, as: string, href: string }): JSX.Element {
    return <Link as={as} href={href}><a {...otherProps}>{children}</a></Link>
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
export const MDX_COMPONENTS = {
    a: CustomLink,
    // It also works with dynamically-imported components, which is especially
    // useful for conditionally loading components for certain routes.
    // See the notes in README.md for more details.
    //   TestComponent: dynamic(() => import('../../components/TestComponent')),
    Head,
}