import React, { ReactNode } from "react"
import ContactPane from "./contact-pane"

export default function MiscSideBar(): JSX.Element {
    return <aside className="misc-sidebar d-flex flex-column-reverse">
        <div>
            <ContactPane />
        </div>
    </aside>
}