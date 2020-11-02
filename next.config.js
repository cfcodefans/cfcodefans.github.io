/**
 * export const PHASE_EXPORT = 'phase-export'
export const PHASE_PRODUCTION_BUILD = 'phase-production-build'
export const PHASE_PRODUCTION_SERVER = 'phase-production-server'
export const PHASE_DEVELOPMENT_SERVER = 'phase-development-server'
 */
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require("next/constants")

const _attr = require("remark-attr")
const withMDX = require("@next/mdx")()

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [_attr]
    }
})

const externals = {
    "jquery": "$",
    "bootstrap": "BootStrap",
    "react-dom": "ReactDOM",
    "lodash": "_",
    "react": "React"
}

module.exports = withMDX((phase, { defaultConfig }) => {
    return {
        /* config options here */
        pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],

        webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
            // Note: we provide webpack above so you should not `require` it
            // Perform customizations to webpack config
            config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

            // Important: return the modified config
            // config["externals"] = externals
            console.info("phase", phase)
            console.info("buildId", JSON.stringify(buildId))
            console.info("dev", JSON.stringify(dev))
            console.info("isServer", JSON.stringify(isServer))
            console.info("defaultLoaders", JSON.stringify(defaultLoaders))
            console.info("webpack", JSON.stringify(webpack))
            console.info("config.externals", JSON.stringify(config["externals"]))

            config["externals"] = [...config["externals"], externals]
            return config
        },
    }
})