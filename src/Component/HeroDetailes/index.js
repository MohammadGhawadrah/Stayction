import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MostImage from '../MostImage';
import img1 from '../../Assets/detail-1.png';
import img2 from '../../Assets/detail-2.png';
import img3 from '../../Assets/detail-3.png';
import { Grid } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function HeroDetailes() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const [DetailData, setDetailData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/ec810404-efd9-4256-9b79-3b42d9805209")
        const { data } = response
        setDetailData(data)
        console.log("data", data)
    }
    useEffect(() => getData, []);
    const { productId } = useParams();
    console.log("productId ", productId)
    let dataId = DetailData.find((item) => item.id == productId);
    console.log("dataId", dataId)
    const { title, img, topComment, name, description } = dataId;
    return (
        <div role="presentation" onClick={handleClick}>
            {dataId ?
                <Grid>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" to="/">
                            Home
                        </Link>
                        <Typography color="text.primary">Detailes </Typography>
                    </Breadcrumbs>

                    <Typography variant="myVariant"><Box sx={{ textAlign: 'center' }}>Village Angga</Box></Typography>
                    <Typography variant="detail">
                        <Box sx={{ textAlign: 'center' }}>Bogor, Indonesia</Box>
                    </Typography>
                    <Stack
                        direction="row-reverse"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                        spacing={83}
                        position={'relative'}
                        marginBottom={40}
                    >
                        <Grid><Grid sx={{ marginBottom: 32 }} ><MostImage img={img3} /></Grid>
                            <Grid> <MostImage img={img2} /></Grid></Grid>
                        <Grid> <MostImage img={img1} /></Grid></Stack> </Grid> : <div>Loading </div>}
        </div>
    );
}