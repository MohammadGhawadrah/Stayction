import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div>
            <header>this is page header</header>
            <Outlet />
            <footer>this is page footer</footer>
        </div>
    )
}

export default Layout
