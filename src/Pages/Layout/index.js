import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/Header/indx'
function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>this is page footer</footer>
        </div>
    )
}

export default Layout
