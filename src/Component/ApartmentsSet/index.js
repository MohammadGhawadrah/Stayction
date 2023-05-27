import { Box, Grid } from "@mui/material";
import React from "react";
import { ApartmentsSetData } from './data';
import MainTitle from "../MainTitle";
import { createTheme } from "@mui/material/styles";
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleApartment, ThemeApartment } from "./style";
const ApartmentsSet = () => {
    return (
        <Grid sx={{ position: 'relative', marginTop: 15 }}>
            <MainTitle text={"Apartments with kitchen set"} />
            <Grid container>
                {ApartmentsSetData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                    <MostImage img={product.img} />
                    <Box><StyleApartment>
                        {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleApartment></Box>
                    <Box><ThemeApartment>
                        <Typography variant="myVariant">{product.name}</Typography>
                        <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeApartment></Box>
                </Grid>))}
            </Grid>
        </Grid>
    );
};
export default ApartmentsSet;
