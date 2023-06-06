import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img4 from '../../Assets/image 4.png';
import img5 from '../../Assets/image 5.png';
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
function PaymentTable() {


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
    const perNight = sumNight / price
    const tax = perNight * 10;
    return (
        <Box sx={{ position: 'relative', marginTop: 15, marginLeft: 15, }}>
            <Grid container gap={8} spacing={12} columns={{ xs: 12, sm: 8, md: 16 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box >
                        <Typography variant="h6" color={'primary'}>Transfer Pembayaran:</Typography>
                        <Typography variant="h6" color={'primary'}>Tax: 10%</Typography>
                        <Typography variant="h6" color={'primary'}>{price}</Typography>
                        <Typography variant="h6" color={'primary'}>sub Total {sumNight}$ per {perNight} Night</Typography>
                        <Typography variant="detail">sub Total {tax}$ per {perNight} Night</Typography>
                    </Box>
                    <Grid item xs={12} sm={6} md={18} sx={{ marginTop: 4 }} >
                        <MostImage img={img4} sx={{ marginTop: 4 }} />
                        <Grid sx={{ marginLeft: 10 }}><Typography variant="h6" color={'primary'}>Bank Central Asia</Typography>
                            <Typography variant="h6" color={'primary'}> 2208 1996 </Typography>
                            <Typography variant="h6" color={'primary'}> Build With Angga</Typography></Grid>
                        <Box sx={{ marginTop: 4 }}><MostImage img={img5} />
                            <Grid sx={{ marginLeft: 10 }}><Typography variant="h6" color={'primary'}>Bank Mandiri</Typography>
                                <Typography variant="h6" color={'primary'}> 2208 1996 </Typography>
                                <Typography variant="h6" color={'primary'}> BuildWith Angga</Typography></Grid></Box>
                    </Grid>
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
                        <Typography variant="h6" color={'primary'}>Upload Bukti Transfer</Typography>
                        <TextField sx={{ color: 'primary' }}
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Asal Bank</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Nama Pengirim</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                    </Box>
                </Grid>

            </Grid >
            <Box sx={{ marginLeft: 40, marginTop: 5 }}> <Link style={{ textDecoration: "none" }} to={`/Completed`}>
                <MainButton text={"Complete"} />
            </Link></Box>
            <Box sx={{ marginLeft: 40, marginTop: 2, marginBottom: 3 }}> <Link to="/"><Button sx={{ backgroundColor: '#F5F6F8', color: "#B3B3B3 ", width: 200 }}>
                Cancel </Button></Link></Box>
            <AppBar component="nav" sx={{ position: 'relative', alignItems: 'center', backgroundColor: "#ffff", height: 80 }}></AppBar>
        </Box >
    )
}

export default PaymentTable

