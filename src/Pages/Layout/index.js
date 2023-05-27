import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Component/Header/indx'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from '../../Component/Footer';
function Layout() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >

                <Header />
                <Outlet />
                <Footer />
            </Container>
        </React.Fragment>

    )
}

export default Layout

