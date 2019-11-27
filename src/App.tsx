import { MDXProvider } from "@mdx-js/react"
import { Router } from "@reach/router"
import React from "react"
import { addPrefetchExcludes, Root, Routes } from "react-static"
import "./app.less"
import MDX_Frame from "./components/mdx_frame"

// Any routes that start with "dynamic" will be treated as non-static routes
addPrefetchExcludes(["dynamic"])

function App() {
    return (<Root>
        <React.Suspense fallback={<em>Loading...</em>}>
            <MDXProvider id="mdxProvider" components={{ wrapper: MDX_Frame }}>
                <Router id="router">
                    <Routes path="/" />
                    <Routes path="/home" />
                    <Routes path="/blogs/*" />
                </Router>
            </MDXProvider>
        </React.Suspense>
    </Root>)
}

export default App
