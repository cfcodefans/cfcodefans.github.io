import { LetterCounts } from "components/lab/vic-tests"
import React, { useRef, useState } from "react"

function TemperatureConvertor(): JSX.Element {
    const inputRef = useRef(null)
    const [ts, setTS] = useState(0)

    return <>
        <input type="number" ref={inputRef} onChange={ev => setTS(inputRef.current.value)} value={ts}></input> °C =&gt; 
        <span>&nbsp;{ts * 9 / 5 + 32} °F</span>
    </>
}

export default function Workshop(): JSX.Element {
    return <div style={{ height: "600px", width: "800px" }}>
        <LetterCounts str="whatever it is, please count the frequency of letters in this sentence" />

        <TemperatureConvertor />
    </div>
}

