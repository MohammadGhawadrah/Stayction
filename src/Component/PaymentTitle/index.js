import React from 'react'
import MainTitle from '../../Component/MainTitle'
import { Box, Typography } from '@mui/material'
import { theme } from "./style";
function PaymentTitle() {
    return (
        <Box sx={theme.AddTitletheme}>
            <MainTitle text={"Payment "} />
            <Typography variant="detail">Kindly follow the instructions below</Typography>
        </Box>
    )
}

export default PaymentTitle

