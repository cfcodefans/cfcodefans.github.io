import { useMedia } from "react-use"

export function useProperVisRect(w2hRatio: number, maxSize: number = 360): { width: number, height: number } {
    let isPortrait: boolean = useMedia("(orientation: portrait)") ?? false

    if (isPortrait) {
        return { width: maxSize, height: Math.floor(maxSize / w2hRatio) }
    }
    let height = maxSize
    return { width: height * w2hRatio, height }
}