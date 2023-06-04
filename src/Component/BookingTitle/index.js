import React from 'react'
import MainTitle from '../../Component/MainTitle'
import { Box, Typography } from '@mui/material'
import { theme } from "./style";
function BookingTitle() {
    return (
        <Box sx={theme.AddTitletheme}>
            <MainTitle text={"Booking Information"} />
            <Typography variant="detail">Please fill up the blank fields below</Typography>
        </Box>
    )
}

export default BookingTitle

