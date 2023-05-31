import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { theme } from "./style";
import style from './style.module.css';
import Divider from '@mui/material/Divider';

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={3} >
                <Typography marginBottom={2} variant="h6" color="secondary">
                    Stay <b className={style.blogo}> cation</b>
                </Typography>
                <Typography variant="detail">
                    <Box>We kaboom your beauty holiday
                        instantly and memorable</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary"> For Beginners </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>New Account</Box>
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>Start Booking a Room</Box>
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>Use Payments</Box>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary">Explore Us </Typography>
                <Typography variant="detail">
                    <Box>Our Careers</Box>
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>Privacy</Box>
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>Terms & Conditions</Box>
                </Typography>

            </Grid>
            <Grid item xs={3}>
                <Typography marginBottom={2} variant="h6" color="primary"> Connect Us </Typography>
                <Typography variant="detail">
                    support@staycation.id
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>021 - 2208 - 1996</Box>
                </Typography>
                <Typography variant="detail">
                    <Box sx={{ marginTop: 2 }}>Staycation, Kemang, Jakarta</Box>
                </Typography>
            </Grid>
        </React.Fragment>
    );
}
export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1, position: 'relative', marginTop: 10 }}  >
            <Divider sx={{ marginBottom: 6 }} />
            <Grid container spacing={1}  >
                <Grid container item spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
            <Typography variant="h7" color="secondary">
                <Box sx={theme.bcopy}> Copyright 2019 • All rights reserved • Staycation</Box>
            </Typography>
        </Box>
    );
}