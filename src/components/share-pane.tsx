import _ from "lodash"
import { NextRouter, useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import {
    FacebookIcon, FacebookShareButton,
    LinkedinIcon, LinkedinShareButton,

    TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton,

    WeiboIcon, WeiboShareButton
} from "react-share"

export default function SharePane({ meta }: { meta: any }): JSX.Element {
    const title = meta["title"]

    const router: NextRouter = useRouter()
    const [url, setUrl] = useState(router.asPath)
    useEffect(() => setUrl(document.URL))

    const description: string = meta["desc"] || title
    const keywords: string[] = meta["tags"] || []
    const imgUrl: string = _.get(meta, "og.image")

    const btnClass: string = ""
    const iconClass: string = "rounded-circle mx-1 hoverable"

    return <div className="share-pane float-end d-flex justify-content-between">
        <LinkedinShareButton url={url} title={title} summary={description} source={url} className={btnClass}>
            <LinkedinIcon className={iconClass} />
        </LinkedinShareButton>
        <FacebookShareButton url={url} title={title} quote={description} hashtag={keywords.join(",")} className={btnClass}>
            <FacebookIcon className={iconClass} />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} hashtags={keywords} className={btnClass}>
            <TwitterIcon className={iconClass} />
        </TwitterShareButton>
        <TelegramShareButton url={url} title={title} className={btnClass}>
            <TelegramIcon className={iconClass} />
        </TelegramShareButton>
        <WeiboShareButton title={title} image={imgUrl} url={url} className={btnClass}>
            <WeiboIcon className={iconClass} />
        </WeiboShareButton>
    </div>
}