import React from 'react'
import ReactDOM, { Renderer } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
function main() {
    if (typeof document === 'undefined') return

    const target: HTMLElement = document.getElementById('root')
    const renderMethod: Renderer = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render
    const render = (Comp: Function) => renderMethod(<AppContainer><Comp /></AppContainer>, target)

    // Render!
    render(App)
    // Hot Module Replacement
    if (module && module.hot) {
        module.hot.accept('./App', () => render(App))
    }
}

main()
