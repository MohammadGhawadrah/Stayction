
import MainButton from './../MainButton';
import Typography from '@mui/material/Typography';
import Stars from '../Rating';
import IndDecButton from '../IndDecButton';
import DateSelect from '../DateSelect';
import { styled } from '@mui/system';
import { StyledGrid } from './style';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { json, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import ProductContext from "../Context";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
function StartBooking() {
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description, price } = dataId;
    }
    const [count, setCount] = useState(0);
    const [sumNight, setsumNight] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
        setsumNight((count + 1) * price);
    }
    const decrementCount = () => {
        { count > 0 ? setCount(count - 1) && setsumNight((count - 1) * price) : setCount(count == 0) && setsumNight(0) }
        setsumNight((count - 1) * price);
    }
    useEffect(() => {
        localStorage.setItem('sumNight', sumNight)
        console.log("sumNight", sumNight)
    }, [sumNight])

    return (
        <Grid sx={{ borderColor: 'black' }} item xs={12} sm={6} md={6}>
            <StyledGrid>
                <Typography variant="h4" color="primary">Start Booking</Typography>
                <Typography variant="detail" sx={{ fontSize: 30 }}>
                    <Typography variant="h7" color="#1ABC9C">${price}</Typography>  per night
                </Typography>
                <Typography variant="h4" color="primary">
                    How long you will stay?
                </Typography>
                <ButtonGroup sx={{ border: 'none', fontSize: '24px', }}>
                    <Button onClick={decrementCount} style={{ minWidth: 45, color: 'white', background: '#E74C3C' }} sx={{ m: 0, p: 0 }}>-</Button>
                    <Button style={{ minWidth: 230, backgroundColor: '#F5F6F8', color: 'secondary' }} >{count} nights </Button>
                    <Button onClick={incrementCount} style={{ minWidth: 45, color: 'white', background: '#1ABC9C' }} sx={{ m: 0, p: 0 }}>+</Button>
                </ButtonGroup>
                <Typography variant="h4" color="primary">
                    Pick a Date
                </Typography>
                <DateSelect />
                <Box sx={{ marginBottom: 4 }}><Typography variant="detail" sx={{ fontSize: 20 }}>
                    You will pay   '

                    <Typography variant="myVariant" sx={{ fontSize: 20 }}>${sumNight} USD</Typography>
                    ' per  ' <Typography variant="myVariant" sx={{ fontSize: 20 }}>{count} nights</Typography>
                </Typography></Box>

                <Link style={{ textDecoration: "none" }} to={`/Booking/${productId}`}>
                    <MainButton text={"Continue to Book"} />
                </Link>
            </StyledGrid>
        </Grid>
    )
}

export default StartBooking
