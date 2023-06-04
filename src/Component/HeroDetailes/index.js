import React from 'react'
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
import { useParams } from "react-router-dom";
import { WidthFull } from '@mui/icons-material';
import { useContext } from "react";
import ProductContext from "../Context";

export default function HeroDetailes() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description } = dataId;
    }
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

                    <Typography variant="myVariant"><Box sx={{ textAlign: 'center' }}>{title}</Box></Typography>
                    <Typography variant="detail">
                        <Box sx={{ textAlign: 'center' }}>{name}</Box>
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
                            <Grid> <MostImage img={img} s /></Grid></Grid>
                        <Grid> <MostImage img={img1} sx={{ WidthFull }} /></Grid></Stack> </Grid> : <div>Loading </div>}
        </div>
    );
}