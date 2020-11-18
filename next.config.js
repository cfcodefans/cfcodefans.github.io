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

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [_attr, remarkMath, removeImports],
        rehypePlugins: [rehypeKatex],
    }
})

const externals = {
    "jquery": "$",
    "bootstrap": "BootStrap",
    "react-dom": "ReactDOM",
    "lodash": "_",
    "react": "React"
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

        config["externals"] = [...config["externals"], externals]

        if (!isServer) {
            config["node"] = { global: true, fs: "empty" }
        }

        return config
    },
})