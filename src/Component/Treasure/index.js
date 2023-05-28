import { Box, Grid } from "@mui/material";
import React from "react";
import { TreasureData } from './data';
import MainTitle from "../MainTitle";
import { createTheme } from "@mui/material/styles";
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleTreasure, ThemeTreasure } from "./style";
const Treasure = () => {
    return (
        <Grid sx={{ position: 'relative', marginBottom: 10 }}>
            <MainTitle text={"Treasure to Choose"} />
            <Grid container>
                {TreasureData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                    <MostImage img={product.img} />
                    <Box><StyleTreasure>
                        {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleTreasure></Box>
                    <Box sx={{ marginTop: 25 }}><ThemeTreasure>
                        <Typography variant="myVariant">{product.name}</Typography>
                        <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeTreasure></Box>
                </Grid>))}
            </Grid>
        </Grid >
    );
};
export default Treasure;
