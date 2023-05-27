import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import style from './style.module.css';

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={3} >
                <Typography marginBottom={2} variant="h6" color="secondary">
                    Stay<b className={style.blogo} >cation</b>
                </Typography>
                <Typography variant="h7" color="secondary">
                    <Box>We kaboom your beauty holiday
                        instantly and memorable</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary"> For Beginners </Typography>
                <Typography variant="h7" color="secondary">
                    New Account
                </Typography>
                <Typography variant="h7" color="secondary">
                    <Box>Start Booking a Room</Box>
                </Typography>
                <Typography variant="h7" color="secondary">
                    Use Payments
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary">Explore Us </Typography>
                <Typography variant="h7" color="secondary">
                    <Box>Our Careers</Box>
                </Typography>
                <Typography variant="h7" color="secondary">
                    Privacy
                </Typography>
                <Typography variant="h7" color="secondary">
                    Terms & Conditions
                </Typography>

            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary"> Connect Us </Typography>
                <Typography variant="h7" color="secondary">
                    support@staycation.id
                </Typography>
                <Typography variant="h7" color="secondary">
                    <Box>021 - 2208 - 1996</Box>
                </Typography>
                <Typography variant="h7" color="secondary">
                    Staycation, Kemang, Jakarta
                </Typography>
            </Grid>
        </React.Fragment>
    );
}
export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1, position: 'relative' }}>
            <Grid container spacing={1} >
                <Grid container item spacing={1}>
                    <FormRow />

                </Grid>
            </Grid>
            <Typography variant="h7" color="secondary">
                <div className={style.bcopy}> Copyright 2019 • All rights reserved • Staycation</div>
            </Typography>
        </Box>
    );
}