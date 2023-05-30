import React from 'react'
import MainButton from './../MainButton';
import Typography from '@mui/material/Typography';
import Stars from '../Rating';
import IndDecButton from '../IndDecButton';
import DateSelect from '../DateSelect';
import { styled } from '@mui/system';
import { StyledGrid } from './style';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function StartBooking() {
    return (
        <Grid sx={{ borderColor: 'black' }} item xs={12} sm={6} md={6}>
            <StyledGrid>
                <Typography variant="h4" color="primary">Start Booking</Typography>
                <Typography variant="detail" sx={{ fontSize: 30 }}>
                    <Typography variant="h7" color="#1ABC9C">$280</Typography>  per night
                </Typography>
                <Typography variant="h4" color="primary">
                    How long you will stay?
                </Typography>
                <IndDecButton />
                <Typography variant="h4" color="primary">
                    Pick a Date
                </Typography>
                <DateSelect />
                <Box sx={{ marginBottom: 4 }}><Typography variant="detail" sx={{ fontSize: 20 }}>
                    You will pay   '
                    <Typography variant="myVariant" sx={{ fontSize: 20 }}>$480 USD</Typography>
                    ' per  ' <Typography variant="myVariant" sx={{ fontSize: 20 }}>2 nights</Typography>
                </Typography></Box>

                <MainButton text={"Continue to Book"} />
            </StyledGrid>
        </Grid>
    )
}

export default StartBooking
