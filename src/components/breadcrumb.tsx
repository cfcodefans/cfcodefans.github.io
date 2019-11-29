import React from "react"

const BreadCrumb: React.FC<{ _path: string }> = (props: { _path: string }) => {
    const _p: string = props._path

    return (<ol className="breadcrumb">
        {
            _p.split("/")
                .filter(part => part.length > 0)
                .map((part: string, i: number) => (<li className="breadcrumb-item active" key={i}>{part}</li>))
        }
    </ol>)
}

export default BreadCrumb