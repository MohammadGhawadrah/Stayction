import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import MainTitle from "../MainTitle";
import PurpulComment from '../PurpulComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleTreasure, ThemeTreasure } from "./style";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
const Treasure = () => {
    const [TreasureData, setTreasureData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/ec810404-efd9-4256-9b79-3b42d9805209")
        const { data } = response
        const Treasure = data.filter(({ title }) => title === "Treasure");
        setTreasureData(Treasure)
    }
    useEffect(() => getData, [])
    return (
        <Grid sx={{ position: 'relative', marginBottom: 10 }}>
            <MainTitle text={"Treasure to Choose"} />
            {TreasureData ?
                <Grid container>
                    {TreasureData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                        <MostImage img={product.img} /><AddToCart id={product.id} />
                        <Box><StyleTreasure>
                            {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleTreasure></Box>
                        <Box sx={{ marginTop: 25 }}><ThemeTreasure>
                            <Typography variant="myVariant">{product.name}</Typography>
                            <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeTreasure></Box>
                    </Grid>))}
                </Grid> : <Loading />}
        </Grid >
    );
};
export default Treasure;
