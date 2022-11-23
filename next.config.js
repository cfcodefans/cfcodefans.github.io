/**
 * export const PHASE_EXPORT = "phase-export"
export const PHASE_PRODUCTION_BUILD = "phase-production-build"
export const PHASE_PRODUCTION_SERVER = "phase-production-server"
export const PHASE_DEVELOPMENT_SERVER = "phase-development-server"
 */
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require("next/constants")

// const withLess = require("@zeit/next-less")
const _ = require("lodash")
const _attr = require("remark-attr")
const remarkMath = require("remark-math")
const removeImports = require("remark-mdx-remove-imports")
const rehypeKatex = require("rehype-katex")
const removeExports = require("remark-mdx-remove-exports")
const highlight = require("remark-highlight.js")
// const rehypePrism = require("@mapbox/rehype-prism")

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [_attr, remarkMath, removeExports, highlight],
        rehypePlugins: [rehypeKatex],
    }
})

const externals = {
    "jquery": "$",
    "bootstrap": "BootStrap",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-bootstrap": "ReactBootstrap",
    "lodash": "_",
    "victory": "Victory",
    "highlight.js": "hljs"
}

module.exports = withMDX({
    // basePath: "/target",
    // distDir: "/tmp",

    pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        if (!isServer) {
            config["externals"] = _.isArrayLike(config["externals"]) ? [...config["externals"], externals] : [externals]
            console.info("webpack.externals", config["externals"])
            // config["node"] = { global: true, fs: "empty" }
        }

        return config
    },
})