import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/Header/indx'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function Layout() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >

                <Header />
                <Outlet />
                <footer>this is page footer</footer>
            </Container>
        </React.Fragment>

    )
}

export default Layout

