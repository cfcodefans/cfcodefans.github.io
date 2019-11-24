import * as _p from "path"
import * as L from "../src/blog-loader"
import * as C from "../src/commons"

describe("find mdx files", () => {
    it("start", async () => {
        const ROOT_PATH = _p.resolve(`${__dirname}/../src/pages/blogs`)
        const BASE_PATH = _p.resolve(`${__dirname}/../src/pages/`)

        let roots: L.IPathInfo[] = await L.ls(ROOT_PATH)
        // console.info(roots)
        let loaded: L.IPathInfo[] = await L.searchBlogs(roots)
        // C.iterateTree(loaded, async (pi: L.IPathInfo, ancestores: L.IPathInfo[]) => {
        //     console.info(ancestores.map(an => an.path), pi.path)
        //     return pi.children
        // })
        // console.info(JSON.stringify(loaded, null, "  "))
        C.deepTraverse(loaded, (pi: L.IPathInfo) => {
            console.info(pi.path)
            return pi.children
        })

        console.info("\nmenus:\n")
        let menus: L.IMenuItemModal[] = L.pathTreeToMenuTree(loaded, BASE_PATH)
        C.deepTraverse(menus, (mi: L.IMenuItemModal) => {
            console.info(mi.link, mi.layer, mi.leaveCount)
            return mi.children
        })

        return

        console.info("\nroutes:\n")
        let routes: L.IRouteModal[] = await L.pathTreeToRouteTree(loaded, BASE_PATH)
        C.deepTraverse(routes, (rm: L.IRouteModal) => {
            console.info(rm.path, rm.childrenCount)
            return rm.children
        })
    })
})