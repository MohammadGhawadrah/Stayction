import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import MainTitle from "../MainTitle";
import PurpulComment from '../PurpulComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleApartment, ThemeApartment } from "./style";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import AddToCart from "../AddToCart";
const ApartmentsSet = () => {
    const [ApartmentsSetData, setApartmentsSetData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/ec810404-efd9-4256-9b79-3b42d9805209")
        const { data } = response
        const Apartments = data.filter(({ title }) => title === "Apartments");
        setApartmentsSetData(Apartments)
    }
    useEffect(() => getData, [])
    return (
        <Grid sx={{ position: 'relative', marginTop: 5 }}>
            <MainTitle text={"Apartments with kitchen set"} />
            {ApartmentsSetData ?
                <Grid container>
                    {
                        ApartmentsSetData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                            <MostImage img={product.img} /><AddToCart id={product.id} />
                            <Box><StyleApartment>
                                {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleApartment></Box>
                            <Box sx={{ marginTop: 25 }}><ThemeApartment>
                                <Typography variant="myVariant">{product.name}</Typography>
                                <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeApartment></Box>
                        </Grid>))}
                </Grid> : <Loading />}
        </Grid>
    );
};
export default ApartmentsSet;
