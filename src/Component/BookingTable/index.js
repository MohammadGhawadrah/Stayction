import React, { useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import MainButton from '../MainButton';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../Context';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MostImage from '../MostImage';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
function BookingTable() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const validate = () => {
        if (firstName.length === 0) {
            alert('Please provide your first name!');
            firstNameRef.current.focus();
            return false;
        } else if (lastName.length === 0) {
            alert('Please provide your last name!');
            lastNameRef.current.focus();
            return false;
        } else if (email.length === 0) {
            alert('Please provide your email address!');
            emailRef.current.focus();
            return false;
        } else if (phoneNumber.length === 0) {
            alert('Please provide your phone number!');
            phoneNumberRef.current.focus();
            return false;
        }
        return true
    };
    const [sumNight, setSumNight] = useState(0);
    useEffect(() => {
        const storedSumNight = localStorage.getItem('sumNight');
        setSumNight(storedSumNight);
    }, [sumNight]);
    const products = useContext(ProductContext);
    const { productId } = useParams();
    if (products) {
        var dataId = products.find((item) => item.id == productId);
        var { title, img, topComment, name, description, price } = dataId;
    }
    const perNight = sumNight / price;
    const handleContinue = () => {
        if (validate()) {
            window.location.href = `/Payment/${productId}`;
        }
    };
    return (
        <Box sx={{ position: 'relative', marginTop: 15, marginLeft: 15 }}>
            <Grid container gap={10} spacing={16} columns={{ xs: 12, sm: 8, md: 16 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <MostImage img={img} />
                    <Box sx={{ marginTop: 35 }}>
                        <Typography variant="h6" color={'primary'}>
                            {title}
                        </Typography>
                        <Typography variant="h6" color={'primary'}>
                            {name}
                        </Typography>
                        <Typography variant="h6" color={'primary'}>
                            {sumNight}$ per {perNight} Night
                        </Typography>
                        <Typography variant="detail">{description}</Typography>
                    </Box>
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
                        <Typography variant="h6" color={'primary'}>
                            First Name
                        </Typography>
                        <TextField
                            sx={{ color: 'primary' }}
                            required
                            id="filled-requireda"
                            label="Required"
                            variant="filled"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            inputRef={firstNameRef}
                        />
                        <Typography variant="h6" color={'primary'}>
                            Last Name
                        </Typography>
                        <TextField
                            required
                            id="filled-requiredb"
                            label="Required"
                            variant="filled"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            inputRef={lastNameRef}
                        />
                        <Typography variant="h6" color={'primary'}>
                            Email Adress
                        </Typography>
                        <TextField
                            required
                            id="filled-requiredc"
                            label="Required"
                            variant="filled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            inputRef={emailRef}
                        />
                        <Typography variant="h6" color={'primary'}>
                            Phone Number
                        </Typography>
                        <TextField
                            required
                            id="filled-requiredd"
                            label="Required"
                            variant="filled"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            inputRef={phoneNumberRef}
                        />
                    </Box>
                    <Box marginTop={3} marginLeft={-5}> <Link onClick={handleContinue} style={{ textDecoration: "none" }}>
                        <MainButton text={"CUNTINUE TO PAYMENT"} />
                    </Link></Box>
                    <Box marginTop={3} marginLeft={-5}><Link to="/"><Button sx={{ backgroundColor: '#F5F6F8', color: "#B3B3B3 ", width: 200 }}>
                        Cancel </Button></Link></Box>

                </Grid>
            </Grid>
            <Box sx={{ position: 'relative', backgroundColor: "#ffff", height: 80 }}></Box>
        </Box >
    );
}
export default BookingTable;
