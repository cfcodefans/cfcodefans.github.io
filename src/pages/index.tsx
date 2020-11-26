import pathToMarkdowns from "cache/mdMetas.json"
import routes from "cache/routes.json"
import { BlogList } from "components/mdx-ui"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import { ILayoutPros } from "types"

export default function IndexPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const router: NextRouter = useRouter()
    // const { routes, pathToMarkdowns } = { menus, routeTree, routes, pathToMarkdowns }
    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)

    let pageContent: JSX.Element = null
    if (currentRoute) {
        pageContent = <BlogList mds={currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath])} />
    } else {
        pageContent = <BlogList mds={Object.values(pathToMarkdowns).filter(md => !md.path.includes("resume.mdx"))} />
    }

    return pageContent
}

// export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
//     i("index.tsx", "context", context)
//     const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
//     i("index.tsx", "menus", layoutProps.menus.length)
//     return { props: { layoutProps } }
// }