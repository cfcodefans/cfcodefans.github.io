import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document"
import { i } from "lib/commons"
import React from "react"

class TemplateDoc extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        //https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        // Render app and page and get the context of the page with collected side effects.
        const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    docOnLoad() {
        i("_document.tsx", "hljs", typeof window["hljs"])
        window["hljs"].initHighlightingOnLoad()
    }

    /**<!--format-detection翻译成中文的意思是“格式检测”，顾名思义，它是用来检测html里的一些格式的，那关于meta的format-detection属性主要是有以下几个设置：
        meta name="format-detection" content="telephone=no"
        meta name="format-detection" content="email=no"
        meta name="format-detection" content="adress=no"
        也可以连写：meta name="format-detection" content="telephone=no,email=no,adress=no"
        下面具体说下每个设置的作用：
        一、telephone
        你明明写的一串数字没加链接样式，而iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！想去掉这个拨号链接该如何操作呢？
        这时我们的meta又该大显神通了，代码如下：
        telephone=no就禁止了把数字转化为拨号链接！
        telephone=yes就开启了把数字转化为拨号链接，要开启转化功能，这个meta就不用写了,在默认是情况下就是开启！
        二、email
        告诉设备不识别邮箱，点击之后不自动发送
        email=no禁止作为邮箱地址！
        email=yes就开启了把文字默认为邮箱地址，这个meta就不用写了,在默认是情况下就是开启！
        三、adress
        address=no禁止跳转至地图！
        address=yes就开启了点击地址直接跳转至地图的功能,在默认是情况下就是开启！   -->
     */
    render(): JSX.Element {
        return <Html prefix="og: https://ogp.me/ns#">
            <Head>
                <link href="/assets/css/common.css" rel="stylesheet" />
                <link href="/assets/css/component.css" rel="stylesheet" />
                <link href="/assets/css/mainframe-protrait.css" rel="stylesheet" media="(orientation: portrait)" />
                <link href="/assets/css/mainframe-landscape.css" rel="stylesheet" media="(orientation: landscape)" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/mdb-ui-kit@3.10.2/css/mdb.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/highlight.js@9.12.0/styles/default.min.css" rel="stylesheet" />
                <meta property="og:type" content="website" />

                <script src="https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
                <script async src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
                <script async src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
                <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
            </Head>
            <body onLoad={this.docOnLoad}>
                <Main />

                {/* <script async src="https://cdn.bootcdn.net/ajax/libs/mdbootstrap/4.9.0/js/mdb.min.js"></script> */}
                <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@2.1.1/dist/react-bootstrap.min.js"></script>
                <script async src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script>
                <script async src="https://cdn.jsdelivr.net/npm/d3@7.3.0/dist/d3.min.js"></script>
                <script defer src="https://cdn.jsdelivr.net/npm/victory@36.2.1/dist/victory.js"></script>

                <NextScript />

                <script async src={`https://www.googletagmanager.com/gtag/js?id=G-2B0HY5T3JZ`} />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || []
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date())
                    gtag('config', 'G-2B0HY5T3JZ', {
                        page_path: window.location.pathname,
                    })
                `}}
                />

            </body>
        </Html>
    }
}

export default TemplateDoc