import React from "react"

export default function BreadCrumb({ _path }: { _path: string }): JSX.Element {
    return (<nav aria-label="breadcrumb"><ol className="breadcrumb">
        {
            _path.split("/")
                .filter(part => part.length > 0)
                .map((part: string, i: number) => (<li className="breadcrumb-item black-text" key={i}>{part}</li>))
        }
    </ol></nav>)
}