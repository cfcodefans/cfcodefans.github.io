import React, { ReactNode } from "react"

export default function NavSideBar(): JSX.Element {
    return <nav className="nav-sidebar">
        <div className="navbar navbar-light">
            <a className="navbar-brand" href="#">
                <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
        </div>
        <div className="collapse navbar-collapse mt-2 container-fluid " id="nav_items">
            <ul className="nav nav-pills py-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#!">Tech</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">Trend</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#!">Math</a>
                </li>
            </ul>
        </div>
    </nav>
}