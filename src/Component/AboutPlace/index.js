import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import IconsDetailPage from '../IconsDetailPage';
import StartBooking from '../StartBooking';
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../Context";
export default function AboutPlace() {
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description } = dataId;
    }
    return (
        <Box sx={{ marginTop: 5 }}>
            <Grid container spacing={15} columns={{ xs: 10, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h4" color="primary">About the place</Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 4 }}>
                        <Box>Minimal techno is a minimalist subgenre of techno music.
                            It is characterized by a stripped-down aesthetic that
                            exploits the use of repetition and understated development.
                            Minimal techno is thought to have been originally developed
                            in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.</Box>
                        <Box>Such trends saw the demise of the soul-infused techno that typified
                            the original Detroit sound. Robert Hood has noted that he and Daniel
                            Bell both realized something was missing from techno in the post-rave era.</Box>
                        <Box>Design is a plan or specification for the construction of an object
                            or system or for the implementation of an activity or process,
                            or the result of that plan or specification in the form of a prototype,
                            product or process. The national agency for design: enabling Singapore
                            to use design for economic growth and to make lives better.</Box>
                    </Typography>
                    <IconsDetailPage />
                </Grid>
                <StartBooking />
            </Grid>
        </Box>
    );
}
