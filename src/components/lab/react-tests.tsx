import React, { useRef, useState } from "react"

export function TemperatureConvertor(): JSX.Element {
    const inputRef = useRef(null)
    const [ts, setTS] = useState(0)

    return <>
        <input type="number" ref={inputRef} onChange={ev => setTS(inputRef.current.value)} value={ts}></input> °C =&gt;
        <span>&nbsp;{ts * 9 / 5 + 32} °F</span>
    </>
}