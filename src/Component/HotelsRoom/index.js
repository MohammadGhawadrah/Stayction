import { Box, Grid } from "@mui/material";
import React from "react";
import { HotelsRoomData } from './data';
import MainTitle from "../MainTitle";
import { createTheme } from "@mui/material/styles";
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StylHotel } from "./style";
const HotelsRoom = () => {
    const theme = createTheme({
        BoxTheme: {
            display: "column",
            justifyContent: "space-between",
            width: 300,
            marginTop: 25,
        },
    });
    return (
        <Grid sx={{ position: 'relative', marginTop: 10 }}>
            <MainTitle text={"Hotels with large living room"} />
            <Grid container>
                {HotelsRoomData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                    <MostImage img={product.img} />
                    <Box><StylHotel>
                        {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StylHotel></Box>
                    <Box sx={theme.BoxTheme}>
                        <Typography variant="myVariant">{product.name}</Typography>
                        <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></Box>
                </Grid>))}
            </Grid>
        </Grid>
    );
};
export default HotelsRoom;
