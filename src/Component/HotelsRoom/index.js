import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import MainTitle from "../MainTitle";
import PurpulComment from '../PurpulComment';
import MostImage from '../MostImage';
import { Typography } from '@mui/material';
import { StyleHotel, ThemeHotel } from "./style";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
const HotelsRoom = () => {
    const [HotelsRoomData, setHotelsRoomData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/ec810404-efd9-4256-9b79-3b42d9805209")
        const { data } = response
        const Hotels = data.filter(({ title }) => title === "Hotels");
        setHotelsRoomData(Hotels)
    }
    useEffect(() => getData, [])
    return (
        <Grid sx={{ position: 'relative', marginTop: 5 }}>
            <MainTitle text={"Hotels with large living room"} />
            {HotelsRoomData ?
                <Grid container>
                    {HotelsRoomData.map((product, index) => index < 4 && (<Grid key={product.id} item xs={12} sm={6} md={3}>
                        <MostImage img={product.img} />
                        <Box><StyleHotel>
                            {product.topComment ? <PurpulComment text={product.topComment} /> : null}</StyleHotel></Box>
                        <Box sx={{ marginTop: 25 }}><ThemeHotel>
                            <Typography variant="myVariant">{product.name}</Typography>
                            <Grid><Typography variant="detail">{product.describtion}</Typography></Grid></ThemeHotel></Box>
                    </Grid>))}
                </Grid> : <Loading />}
        </Grid>
    );
};
export default HotelsRoom;
