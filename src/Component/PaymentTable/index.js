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
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../Context";
import { Link } from 'react-router-dom';
function PaymentTable() {


    const [uploadTransfer, setUploadTransfer] = useState('');
    const [asalBank, setAsalBank] = useState('');
    const [namaPengirim, setNamaPengirim] = useState('');

    const uploadTransferRef = useRef(null);
    const asalBankRef = useRef(null);
    const namaPengirimRef = useRef(null);
    const validate = () => {
        if (uploadTransfer.length === 0) {
            alert('Please provide your upload Transfer!');
            uploadTransferRef.current.focus();
            return false;
        } else if (asalBank.length === 0) {
            alert('Please provide your asal Bank!');
            asalBankRef.current.focus();
            return false;
        } else if (namaPengirim.length === 0) {
            alert('Please provide your nama Pengirim!');
            namaPengirimRef.current.focus();
            return false;
        }
        return true
    };


    const [sumNight, setsumNight] = useState(0);
    useEffect(() => {
        const storedSumNight = localStorage.getItem('sumNight')
        setsumNight(storedSumNight)
    }, [sumNight])
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description, price } = dataId;
    }
    const perNight = sumNight / price
    const tax = sumNight * 0.1;
    const sumWithTax = parseInt(sumNight) + parseInt(tax);
    const handleContinue = () => {
        if (validate()) {
            window.location.href = `/Completed/`;
        }
    };

    return (
        <Box sx={{ position: 'relative', marginTop: 15, marginLeft: 15, }}>
            <Grid container gap={8} spacing={12} columns={{ xs: 12, sm: 8, md: 16 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box >
                        <Typography variant="h6" color={'primary'}>Transfer Pembayaran:</Typography>
                        <Typography variant="h6" color={'primary'}>price {price} for one night</Typography>
                        <Typography variant="h6" color={'primary'}>Total {sumNight}$ per {perNight} Night</Typography>
                        <Typography variant="h6" color={'primary'}>Tax: 10%</Typography>
                        <Typography variant="h6" color={'primary'}>sub Total {sumWithTax} per {perNight} Night with tax</Typography>
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
                            value={uploadTransfer}
                            onChange={(e) => setUploadTransfer(e.target.value)}
                            inputRef={uploadTransferRef}
                        />
                        <Typography variant="h6" color={'primary'}>Asal Bank</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                            value={asalBank}
                            onChange={(e) => setAsalBank(e.target.value)}
                            inputRef={asalBankRef}
                        />
                        <Typography variant="h6" color={'primary'}>Nama Pengirim</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                            value={namaPengirim}
                            onChange={(e) => setNamaPengirim(e.target.value)}
                            inputRef={namaPengirimRef}
                        />
                    </Box>


                    <Box marginTop={3}> <Link onClick={handleContinue} style={{ textDecoration: "none" }}>
                        <MainButton text={"Complete"} />
                    </Link></Box>
                    <Box marginTop={3}><Link to="/"><Button sx={{ backgroundColor: '#F5F6F8', color: "#B3B3B3 ", width: 200 }}>
                        Cancel </Button></Link></Box>

                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', backgroundColor: "#ffff", height: 80 }}></Box>
        </Box >
    )
}
export default PaymentTable

