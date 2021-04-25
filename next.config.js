/**
 * export const PHASE_EXPORT = "phase-export"
export const PHASE_PRODUCTION_BUILD = "phase-production-build"
export const PHASE_PRODUCTION_SERVER = "phase-production-server"
export const PHASE_DEVELOPMENT_SERVER = "phase-development-server"
 */
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require("next/constants")

// const withLess = require("@zeit/next-less")
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
    "react-dom": "ReactDOM",
    "lodash": "_",
    "react": "React",
    "victory": "Victory",
    // "@material-ui/core": "MaterialUI",// /^@material-ui\/(core|icons)[\/a-zA-Z]*/, //https://stackoverflow.com/questions/51310723/how-does-one-specify-material-ui-core-as-an-external-in-webpack
    "highlight.js": "hljs"
}

module.exports = withMDX({
    pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

        // Important: return the modified config
        // config["externals"] = externals
        // console.info("phase", phase)
        // console.info("buildId", JSON.stringify(buildId))
        // console.info("dev", JSON.stringify(dev))
        // console.info("isServer", JSON.stringify(isServer))
        // console.info("defaultLoaders", JSON.stringify(defaultLoaders))
        // console.info("webpack", JSON.stringify(webpack))
        // console.info("config.externals", JSON.stringify(config["externals"]))

        if (!isServer) {
            config["externals"] = [...config["externals"], externals]
            console.info("webpack.externals", config["externals"])
            config["node"] = { global: true, fs: "empty" }
        }

        return config
    },
})