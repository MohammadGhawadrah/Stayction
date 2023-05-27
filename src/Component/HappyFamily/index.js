import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../Assets/happyfamily.png'
import Image from './../HeroImage';
import IconsHomePage from './../IconsHomePage';
import MainButton from './../MainButton';
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/material/styles";
import { styled } from '@mui/system';
import MostImage from '../MostImage';
import Stars from '../Rating';
import style from './style.module.css';
import { StyledGrid } from './style';
export default function HappyFamily() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Grid container spacing={6} columns={{ xs: 12, md: 16 }}>
                <div className={style.BorderImg}></div>
                <Grid item xs={12} md={6}>
                    <MostImage img={img} />
                </Grid>
                <Grid item xs={12} md={8}><StyledGrid>
                    <Typography variant="h4" color="primary">Happy Family</Typography>
                    <Stars />
                    <Typography variant="h4" color="primary">What a great trip with my family and
                        I should try again next time soon ...</Typography>
                    <Typography variant="h5" color="thired.main">Angga, Product Designer</Typography>
                    <MainButton text={"Read Their Story"} />
                </StyledGrid>
                </Grid>

            </Grid>
        </Box>
    );
}
