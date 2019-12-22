import React, { ReactNodeArray } from "react"
import { useRouteData, Head } from "react-static"
import { MarkdownMetaInfo } from "../commons"
import { HOME_TITLE, HOME_META_DESCRIPTION } from "../../types"

function MDX_Header(mdMate: MarkdownMetaInfo): JSX.Element {
    console.info(mdMate)
    const meta: any = mdMate.meta

    return (<header>
        <Head>
            <title>{mdMate.meta["title"] || HOME_TITLE}</title>
            <meta name="description" content={meta["desc"] || HOME_META_DESCRIPTION} />
            <meta name="keywords" content={meta["tags"]} />
        </Head>
        <h1>{meta["title"]}</h1>
        <div>Created at: {mdMate.createdAt} | Modified at: {mdMate.modifiedAt}</div>
    </header>)
}

export default MDX_Header