import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../Assets/booking.png';
import Typography from '@mui/material/Typography';
import MostImage from '../MostImage';
import TextField from '@mui/material/TextField';
import MainButton from '../MainButton'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../Context";
import { Link } from 'react-router-dom';
function BookingTable() {
    function validate() {
        if (document.getElementById('filled-requireda').value == '') {
            alert("Please Provide Details!");
            document.getElementById('filled-requireda').focus();
            return false;
        }
        else if (document.getElementById('filled-requiredb').value == '') {
            alert("Please Provide Name!");
            document.getElementById('filled-requiredb').focus();
            return false;
        }
        else
            return true;
    }
    const [sumNight, setsumNight] = useState(0);
    useEffect(() => {
        const storedSumNight = localStorage.getItem('sumNight')
        console.log("sumNight11", storedSumNight)
        setsumNight(storedSumNight)
    }, [sumNight])
    console.log("sumNight22", sumNight)
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description, price } = dataId;
    }
    const perNight = sumNight / price;

    return (
        <Box sx={{ position: 'relative', marginTop: 15, marginLeft: 15, }}>
            <Grid container gap={10} spacing={16} columns={{ xs: 12, sm: 8, md: 16 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <MostImage img={img} />
                    <Box sx={{ marginTop: 35 }}>
                        <Typography variant="h6" color={'primary'}>{title}</Typography>
                        <Typography variant="h6" color={'primary'}>{name}</Typography>
                        <Typography variant="h6" color={'primary'}>{sumNight}$ per {perNight} Night</Typography>
                        <Typography variant="detail">{description}</Typography></Box>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h6" color={'primary'}>First Name</Typography>
                        <TextField sx={{ color: 'primary' }}
                            required
                            id="filled-requireda"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Last Name</Typography>
                        <TextField
                            required
                            id="filled-requiredb"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Email Adress</Typography>
                        <TextField
                            required
                            id="filled-requiredc"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Phone Number</Typography>
                        <TextField
                            required
                            id="filled-requiredd"
                            label="Required"
                            variant="filled"
                        />
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ marginLeft: 40, marginTop: 5 }}> <Link onClick={validate} style={{ textDecoration: "none" }} to={`/Payment/${productId}`}>
                <MainButton text={"Continue to Payment"} />
            </Link></Box>
            <Box sx={{ marginLeft: 40, marginTop: 2, marginBottom: 3 }}> <Link to="/"><Button sx={{ backgroundColor: '#F5F6F8', color: "#B3B3B3 ", width: 200 }}>
                Cancel </Button></Link></Box>
            <AppBar component="nav" sx={{ position: 'relative', alignItems: 'center', backgroundColor: "#ffff", height: 80 }}></AppBar>
        </Box>
    )
}

export default BookingTable

