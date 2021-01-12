import pathToMarkdowns from "cache/mdMetas.json"
import routes from "cache/routes.json"
import { BlogList } from "components/mdx-ui"
import { compare } from "lib/commons"
import { NextRouter, useRouter } from "next/dist/client/router"
import React from "react"
import { ILayoutPros, TMarkdownMetaInfo } from "types"

function sortMds(md1: TMarkdownMetaInfo, md2: TMarkdownMetaInfo): number {
    return -compare(md1.createdAt, md2.createdAt)
}

export default function IndexPage({ layoutProps }: { layoutProps: ILayoutPros }): JSX.Element {
    const router: NextRouter = useRouter()
    const _path: string = router.asPath
    const currentRoute = routes.find(r => r._path == _path)

    let mds: TMarkdownMetaInfo[] = null
    if (currentRoute) {
        mds = currentRoute.offsprings?.map(mdPath => pathToMarkdowns[mdPath]).sort(sortMds)
    } else {
        mds = Object.values(pathToMarkdowns).filter(md => !md.path.includes("resume.mdx")).sort(sortMds)
    }

    // i("index.tsx", "mds.created", mds.map(md => md.createdAt))
    let pageContent: JSX.Element = <BlogList mds={mds} />

    return pageContent
}

// export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<any>> {
//     i("index.tsx", "context", context)
//     const layoutProps: ILayoutPros = { menus, routeTree, routes, pathToMarkdowns }
//     i("index.tsx", "menus", layoutProps.menus.length)
//     return { props: { layoutProps } }
// }