import React, { ReactNode } from "react"

export default function NavTopBar(): JSX.Element {
    return <nav className="top-navbar">
        <div className="navbar navbar-light py-0">
            <form className="flex-grow-1 form-inline d-flex justify-content-center input-group input-group-sm w-75 md-form form-sm mb-0 mt-0">
                <input className="form-control form-control-sm mb-0 mt-0" type="text" placeholder="Search" aria-label="Search" />
                <button type="submit" className="border border-0 bg-0">
                    <i className="fas fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav_items"
                aria-controls="nav_items" aria-expanded="false" aria-label="Toggle navigation">
                <span className="dark-blue-text"><i className="fas fa-bars fa-1x"></i></span>
            </button>
        </div>
    </nav>
}