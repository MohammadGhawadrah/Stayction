import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from './../HeroImage';
import IconsHomePage from './../IconsHomePage';
import MainButton from './../MainButton';
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/material/styles";
import { StyledGrid } from '../Hero/style';
import img from '../../../src/Assets/hero.png'
export default function Hero() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Grid container spacing={6} columns={{ xs: 12, md: 16 }}>
                <Grid item xs={12} md={8}><StyledGrid>
                    <Typography variant="h3" color="primary">Forget Busy Work, Start Next Vacation</Typography>
                    <Typography variant="h5" color="thired.main">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</Typography>
                    <MainButton text={"Show me More"} />
                    <IconsHomePage /></StyledGrid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image img={img} />
                </Grid>
            </Grid>
        </Box>
    );
}
