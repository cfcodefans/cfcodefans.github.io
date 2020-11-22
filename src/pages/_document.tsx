import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document"
import { i } from "lib/commons"

class TemplateDoc extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
        你明明写的一串数字没加链接样式，而iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！想去掉这个拨号链接该如何操作呢？这时我们的meta又该大显神通了，代码如下：
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
                <link href="/css/common.css" rel="stylesheet" />
                <link href="/css/mainframe-protrait.css" rel="stylesheet" media="(orientation: portrait)" />
                <link href="/css/mainframe-landscape.css" rel="stylesheet" media="(orientation: landscape)" />
                <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.css" rel="stylesheet" />
                <link href="https://cdn.bootcdn.net/ajax/libs/mdbootstrap/4.9.0/css/mdb.css" rel="stylesheet" />
                <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.1/css/all.css" rel="stylesheet" />
                <link href="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.3.2/styles/default.min.css" rel="stylesheet" />
                <meta property="og:type" content="website" />
            </Head>
            <body className="root" onLoad={this.docOnLoad}>
                <Main />
                <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
                {/* <script src="https://cdn.bootcdn.net/ajax/libs/popper.js/2.5.3/cjs/popper.js"></script> */}
                <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.js"></script>
                <script src="https://cdn.bootcdn.net/ajax/libs/mdbootstrap/4.9.0/js/mdb.js"></script>
                <script src="https://cdn.bootcdn.net/ajax/libs/react/17.0.1/umd/react.development.min.js"></script>
                <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.1/umd/react-dom.development.js"></script>
                <script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.20/lodash.js"></script>
                <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.3.2/highlight.min.js"></script>

                <NextScript />

                <script async src={`https://www.googletagmanager.com/gtag/js?id=G-2B0HY5T3JZ`} />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || []
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                    gtag('config', 'G-2B0HY5T3JZ', {
                        page_path: window.location.pathname,
                    });
                `}}
                />
            </body>
        </Html>
    }
}

export default TemplateDoc