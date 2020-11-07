import Head from "next/head"
import Link from "next/link"
import React from "react"
import { TMarkdownMetaInfo } from "../types"


export function BlogItem(props: TMarkdownMetaInfo): JSX.Element {
    let excerpt: string = props.excerpt
    let meta: any = props.meta
    let _link: string = props.path
    _link = _link.substring(0, _link.lastIndexOf(".mdx"))

    // const excerptComponent = _mdx.sync(excerpt)

    return (<section className="d-flex flex-column align-items-center rounded-1 shadow container pt-3 mt-3 mb-3">
        <h1>{meta["title"]}</h1>
        <div>Created at: {props.createdAt} | by: {meta["authors"]}</div>
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