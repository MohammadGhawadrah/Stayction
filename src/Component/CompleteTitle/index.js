import React from 'react'
import MainTitle from '../../Component/MainTitle'
import { Box, Typography } from '@mui/material'
import { theme } from "./style";
import img from '../../Assets/complete.png';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
function CompleteTitle() {
    return (
        <Box sx={theme.AddTitletheme}>
            <MainTitle text={"Yay! Completed"} />
            <img src={img} sx={{ position: 'relative', margin: 20 }} />
            <Typography variant="detail">We will inform you via email later
                once the transaction has been accepted
            </Typography>
            <Box sx={{ marginTop: 5 }}> <Link style={{ textDecoration: "none" }} to={`/`}>
                <MainButton text={"Back To Home"} /></Link></Box>
            <AppBar component="nav" sx={{ position: 'relative', alignItems: 'center', backgroundColor: "#ffff", height: 80 }}></AppBar>
        </Box>
    )
}
export default CompleteTitle

