import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from './../HeroImage';
import IconsHomePage from './../IconsHomePage';
import MainButton from './../MainButton';
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/material/styles";
import { styled } from '@mui/system';




const StyledGrid = styled('div')({

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 500,

});

export default function Hero() {
    return (
        <Box position={'relative'}>
            <Grid container spacing={6} columns={{ xs: 12, md: 16 }}>
                <Grid item xs={12} md={8}><StyledGrid>
                    <Typography variant="h3" color="primary">Forget Busy Work, Start Next Vacation</Typography>
                    <Typography variant="h5" color="thired.main">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</Typography>
                    <MainButton Text={"Show me More"} />
                    <IconsHomePage /></StyledGrid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image />
                </Grid>
            </Grid>
        </Box>
    );
}
