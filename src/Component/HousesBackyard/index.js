import { Box, Grid } from "@mui/material";
import React from "react";
import { HousesBackyardData } from './data';
import MainTitle from "../MainTitle";
import { createTheme } from "@mui/material/styles";
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleHouse, ThemeHouse } from "./style";
const HousesBackyard = () => {
    const theme = createTheme({
        BoxTheme: {
            display: "column",
            justifyContent: "space-between",
            width: 300,
            marginTop: 25,
        },
        PurpulCommentTheme: {
            marginLeft: -12.2,
        }
    });
    return (
        <Grid sx={{ position: 'relative' }}>
            <MainTitle text={"Houses with beauty backyard"} />
            <Grid container>
                {HousesBackyardData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                    <MostImage img={product.img} />
                    <Box><StyleHouse>
                        {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleHouse></Box>
                    <Box><ThemeHouse>
                        <Typography variant="myVariant">{product.name}</Typography>
                        <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeHouse></Box>
                </Grid>))}
            </Grid>
        </Grid >
    );
};
export default HousesBackyard;
