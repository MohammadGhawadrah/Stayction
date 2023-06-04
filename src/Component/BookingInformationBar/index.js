import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../Logo';

function BookingInformationBar() {
    return (
        <AppBar component="nav" sx={{ position: 'relative', alignItems: 'center', backgroundColor: "#ffff", height: 80 }}>
            <Toolbar>
                <Logo />
            </Toolbar>
        </AppBar>
    );
}
export default BookingInformationBar;