import Head from "next/head"
import Link from "next/link"
import React, { ReactNode } from "react"
import { compare, jsf } from "../lib/commons"
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
    // return <pre>
    //     {jsf(props)}
    // </pre>

    return (<section className="d-flex flex-column align-items-center rounded-1 shadow container pt-3 mt-3 mb-3">
        <h1>{meta["title"]}</h1>
        <div>Created at: {props.createdAt} | By: {meta && meta["authors"]}</div>
        <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        <Link href={`/${_link}`}>
            <a><h3>read more »</h3></a>
        </Link>
    </section>)
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