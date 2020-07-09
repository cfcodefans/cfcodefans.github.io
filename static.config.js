const _p = require("path")
const _attr = require("remark-attr")
import React, { Component } from "react"
import { LOAD_MENUS, LOAD_PATHS, LOAD_ROUTES } from "./src/blog-loader.js"

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
const ROOT_PATH = _p.resolve(`${__dirname}/src/pages/blogs`)
const BASE_PATH = _p.resolve(`${__dirname}/src/pages/`)

export default {
    siteRoot: "/",
    paths: {
        dist: "docs"
    },

    getSiteData: async () => {
        let menuItems = LOAD_MENUS(await LOAD_PATHS(ROOT_PATH), BASE_PATH)
        // console.info(JSON.stringify(menuItems.map(mi => mi.link), null, "  "))
        return { menus: menuItems }
    },

    entry: _p.join(__dirname, "src", "index.tsx"),
    getRoutes: async () => {
        let routes = await LOAD_ROUTES(await LOAD_PATHS(ROOT_PATH), BASE_PATH)
        console.info(JSON.stringify(routes, null, "  "))
        const allBlogItems = routes.map(r => r.data).flat()

        return Promise.resolve([
            {
                path: "/",
                getData: () => allBlogItems,
                template: "src/pages/blog_list"
            },
            {
                path: "/home",
                getData: () => allBlogItems,
                template: "src/pages/blog_list"
            },
            {
                path: "/blogs",
                template: "src/pages/blog_list",
                getData: () => allBlogItems,
                children: [...routes]
            }
        ])
    },

    plugins: [
        require.resolve("react-static-plugin-typescript"),
        [
            require.resolve("react-static-plugin-source-filesystem"),
            {
                location: _p.resolve("./src/pages"),
            },
        ],
        require.resolve("react-static-plugin-reach-router"),
        require.resolve("react-static-plugin-sitemap"),
        require.resolve("react-static-plugin-less"),
        [require.resolve("react-static-plugin-mdx"),
        {
            includePaths: [_p.resolve("./src/pages/blogs")],
            mdxOptions: {
                remarkPlugins: [_attr]
            }
        }],
    ],

    babelExcludes: [/jquery/, /bootstrap/, /react/, /fs/],

    webpack: (config, { stage }) => {
        let externals = {
            "jquery": "$",
            "bootstrap": "BootStrap",
            "react-dom": "ReactDom",
            "react": "React"
        }
        config["externals"] = externals
        config.module.rules.map(rule => {
            if (typeof rule.test !== "undefined" || typeof rule.oneOf === "undefined") {
                return rule
            }
            return rule
        })

        //https://github.com/webpack-contrib/css-loader/issues/447
        config["target"] = "node"
        config["node"] = {
            global: true,
            fs: "empty"
        }
        // config["output"] = {
        //     libraryTarget: 'umd' // Fix: "Uncaught ReferenceError: exports is not defined".
        // }

        console.info(JSON.stringify(stage))
        console.info(JSON.stringify(config))
        return config
    },

    Document: ({
        Html,
        Head,
        Body,
        children,
        state: { siteData, renderMeta },
    }) => {
        console.info(`

        Head:
        ${JSON.stringify(Head)}

        renderMeta:
        ${JSON.stringify(renderMeta)}
        
        
        `)
        return (<Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
                <meta name="format-detection" content="telephone=no" />
                <link href="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.css" rel="stylesheet" />
                <link href="https://cdn.bootcss.com/font-awesome/5.8.1/css/all.css" rel="stylesheet" />
                <link href="https://cdn.bootcss.com/mdbootstrap/4.16.0/css/mdb.min.css" rel="stylesheet" />
                <link href="https://cdn.bootcss.com/flag-icon-css/3.3.0/css/flag-icon.css" rel="stylesheet" />
            </Head>
            <Body>
                {children}
                <script src="https://cdn.bootcss.com/jquery/3.5.0/jquery.js"></script>
                <script src="https://cdn.bootcss.com/popper.js/1.16.1/umd/popper.js"></script>
                <script src="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.js"></script>
                <script src="https://cdn.bootcss.com/mdbootstrap/4.16.0/js/mdb.min.js"></script>
            </Body>
        </Html>)
    },

    // Document: class SiteHtml extends Component {
    //     render() {
    //         const { Html, Head, Body, children, state: { siteData, renderMeta } } = this.props
    //         return (<Html>
    //             <Head>
    //                 <meta charSet="UTF-8" />
    //                 <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    //                 <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
    //                 <meta name="format-detection" content="telephone=no" />
    //                 <link href="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.css" rel="stylesheet" />
    //                 <link href="https://cdn.bootcss.com/font-awesome/5.8.1/css/all.css" rel="stylesheet" />
    //                 <link href="https://cdn.bootcss.com/mdbootstrap/4.16.0/css/mdb.min.css" rel="stylesheet" />
    //                 <link href="https://cdn.bootcss.com/flag-icon-css/3.3.0/css/flag-icon.css" rel="stylesheet" />
    //             </Head>
    //             <Body>
    //                 {children}
    //                 <script src="https://cdn.bootcss.com/jquery/3.5.0/jquery.js"></script>
    //                 <script src="https://cdn.bootcss.com/popper.js/1.16.1/umd/popper.js"></script>
    //                 <script src="https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.js"></script>
    //                 <script src="https://cdn.bootcss.com/mdbootstrap/4.16.0/js/mdb.min.js"></script>
    //             </Body>
    //         </Html>)
    //     }
    // },
    maxThreads: 8
}
