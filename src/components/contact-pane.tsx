import React, { ReactNode } from "react"

export default function ContactPane(): JSX.Element {
    return <div className="w-100 text-center text-wrap">
        <p>
            Made by <a href="mailto:cfcodefans@gmail.com">cfcodefans</a> 2020<br/>
            <i className="fas fa-copyright"></i>All rights reserved
        </p>
    </div>
}