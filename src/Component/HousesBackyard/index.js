import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import MainTitle from "../MainTitle";
import PurpulComment from '../PurpulComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleHouse, ThemeHouse } from "./style";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
const HousesBackyard = () => {
    const [HousesBackyardData, setHousesBackyardData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/ec810404-efd9-4256-9b79-3b42d9805209")
        const { data } = response
        const Houses = data.filter(({ title }) => title === "Houses");
        setHousesBackyardData(Houses)
    }
    useEffect(() => getData, [])
    return (
        <Grid sx={{ position: 'relative' }}>
            <MainTitle text={"Houses with beauty backyard"} />
            {HousesBackyardData ?
                <Grid container>
                    {HousesBackyardData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                        <MostImage img={product.img} /><AddToCart id={product.id} />
                        <Box><StyleHouse>
                            {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleHouse></Box>
                        <Box sx={{ marginTop: 25 }}><ThemeHouse>
                            <Typography variant="myVariant">{product.name}</Typography>
                            <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeHouse></Box>
                    </Grid>))}
                </Grid> : <Loading />}
        </Grid >
    );
};
export default HousesBackyard;
