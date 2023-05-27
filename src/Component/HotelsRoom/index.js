import { Box, Grid } from "@mui/material";
import React from "react";
import { HotelsRoomData } from './data';
import MainTitle from "../MainTitle";
import { createTheme } from "@mui/material/styles";
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleHotel, ThemeHotel } from "./style";
const HotelsRoom = () => {

    return (
        <Grid sx={{ position: 'relative', marginTop: 15 }}>
            <MainTitle text={"Hotels with large living room"} />
            <Grid container>
                {HotelsRoomData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                    <MostImage img={product.img} />
                    <Box><StyleHotel>
                        {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleHotel></Box>
                    <Box><ThemeHotel>
                        <Typography variant="myVariant">{product.name}</Typography>
                        <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeHotel></Box>
                </Grid>))}
            </Grid>
        </Grid>
    );
};
export default HotelsRoom;
