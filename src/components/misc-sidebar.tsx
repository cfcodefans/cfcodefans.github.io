import React, { ReactNode } from "react"
import ContactPane from "./contact-pane"

export default function MiscSideBar(): JSX.Element {
    return <aside className="miscbar misc-sidebar d-flex flex-column-reverse">
        <div>
            <div id="dock" className="bg-info"></div>
            <ContactPane />
        </div>
    </aside>
}