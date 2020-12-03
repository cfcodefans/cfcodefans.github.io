import { i } from "lib/commons";
import { reject } from "lodash"

const FILE_NAME = "utils.ts"

function removeScript(scriptId: string) {
    const script = document.getElementById(scriptId);
    if (script) {
        document.getElementsByTagName('head')[0].removeChild(script);
    }
}

function addScript(scriptEl: HTMLScriptElement) {
    if (scriptEl)
        document.getElementsByTagName('head')[0].appendChild(scriptEl)
    return scriptEl
}

function unloadFromDock(elId: string): HTMLElement {
    const el: HTMLElement = document.getElementById(elId)
    if (el) {
        document.getElementById("dock").removeChild(el)
    }
    return el
}

function loadToDock(el: HTMLElement): HTMLElement {
    if (!el) return
    document.getElementById("dock").appendChild(el)
    return el
}

function clearFunction(functionName: string) {
    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
        delete window[functionName]
    } catch (e) {
        window[functionName] = undefined
    }
}

export async function _jsonp(_url: string, id: string, callbackFn: Function, timeout: number = 5000): Promise<string> {
    const url = _url

    i(FILE_NAME, "url", url)

    return new Promise((resolveFn: (string) => void, rejectFn: (any) => void) => {
        const jsonScriptEl: HTMLScriptElement = document.createElement("script")
        jsonScriptEl.type = "text/javascript"
        jsonScriptEl.src = url
        jsonScriptEl.id = id
        addScript(jsonScriptEl)

        let result: string = null

        const timeoutId = setTimeout(() => {
            if (result) {
                i(FILE_NAME, "_jsonp.setTimeout", result, result.length)
                resolveFn(result)
                return
            }
            reject(new Error(`JSONP request to ${url} timed out`))
            removeScript(id)
        }, timeout)

        window[callbackFn.name] = (resp) => {
            resolveFn(resp)
            if (timeoutId) clearTimeout(timeoutId)
            removeScript(id)
        }

        // jsonScriptEl.onload = (ev: Event) => {
        //     result = jsonScriptEl.text
        //     i(FILE_NAME, "_jsonp.onload", result, result.length)
        //     resolveFn(result)
        //     if (timeoutId) clearTimeout(timeoutId)
        //     removeScript(id)
        // }

        jsonScriptEl.onerror = (event: string | Event, source?: string, lineno?: number, colno?: number, error?: Error) => {
            rejectFn(error)
            if (timeoutId) clearTimeout(timeoutId)
            removeScript(id)
        }
    })
}

export async function _iframe(_url: string, id: string, timeout: number = 5000): Promise<string> {
    const url = _url

    i(FILE_NAME, "url", url)

    return new Promise((resolveFn: (string) => void, rejectFn: (any) => void) => {
        const iframeEL: HTMLIFrameElement = document.createElement("iframe")
        iframeEL.src = url
        iframeEL.id = id
        loadToDock(iframeEL)

        let result: string = null

        const timeoutId = setTimeout(() => {
            if (result) {
                i(FILE_NAME, "_iframe.setTimeout", result, result.length)
                resolveFn(result)
                return
            }
            reject(new Error(`iframe request to ${url} timed out`))
            unloadFromDock(id)
        }, timeout)

        iframeEL.onload = (ev: Event) => {
            console.info(iframeEL)
            result = (iframeEL.contentDocument || iframeEL.contentWindow.document).body.innerText
            i(FILE_NAME, "_iframe.onload", result, result.length)
            resolveFn(result)
            if (timeoutId) clearTimeout(timeoutId)
            unloadFromDock(id)
        }
        iframeEL.onerror = (event: string | Event, source?: string, lineno?: number, colno?: number, error?: Error) => {
            rejectFn(error)
            if (timeoutId) clearTimeout(timeoutId)
            unloadFromDock(id)
        }
    })
}