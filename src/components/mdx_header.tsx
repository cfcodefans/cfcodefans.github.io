import React from "react"
import { Head } from "react-static"
import { HOME_META_DESCRIPTION, HOME_TITLE } from "../../types"
import { MarkdownMetaInfo } from "../commons"

function MDX_Header(mdMate: MarkdownMetaInfo): JSX.Element {
    console.info(`MDX_Header
        ${JSON.stringify(mdMate)}`)
    const meta: any = mdMate.meta

    return (<div>
        <Head>
            <title>{meta["title"] || HOME_TITLE}</title>
            <meta name="description" content={meta["desc"] || HOME_META_DESCRIPTION} />
            <meta name="keywords" content={meta["tags"]} />
        </Head>
        <h1>{meta["title"]}</h1>
        <div>Created at: {mdMate.createdAt} | Modified at: {mdMate.modifiedAt}</div>
    </div>)
}

export default MDX_Header