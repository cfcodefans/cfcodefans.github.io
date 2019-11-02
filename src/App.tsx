import { Router } from "@reach/router"
import React from "react"
import { addPrefetchExcludes, Root, Routes } from "react-static"
import "./app.less"

import { MDXProvider } from "@mdx-js/react"

// Any routes that start with "dynamic" will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

//https://github.com/react-static/react-static/tree/master/packages/react-static-plugin-mdx
const MDXWrapper = ({ children }) => <main style={{ background: "blue" }} children={children} />

function App() {
    return (<Root>
        <React.Suspense fallback={<em>Loading...</em>}>
            <MDXProvider id="mdxProvider" components={{ wrapper: MDXWrapper }}>
                <Router id="router">
                    <Routes path="/" />
                    <Routes path="/home" />
                    <Routes path="/resume" />
                    <Routes path="/blogs/*" />
                </Router>
            </MDXProvider>
        </React.Suspense>
    </Root>)
}

export default App
