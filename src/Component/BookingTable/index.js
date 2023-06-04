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
function BookingTable() {
    return (
        <Box sx={{ position: 'relative', marginTop: 15, marginLeft: 15, }}>
            <Grid container gap={10} spacing={16} columns={{ xs: 12, sm: 8, md: 16 }}>
                <Grid item xs={12} sm={6} md={6}>
                    <MostImage img={img} />
                    <Box sx={{ marginTop: 35 }}>
                        <Typography variant="h6" color={'primary'}>poda wae</Typography>
                        <Typography variant="h6" color={'primary'}>$480 USD per 2 nights</Typography>
                        <Typography variant="detail">Madiun, Indonesia</Typography></Box>
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
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Last Name</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Email Adress</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                        <Typography variant="h6" color={'primary'}>Phone Number</Typography>
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            variant="filled"
                        />
                    </Box>
                </Grid>

            </Grid>
            <Box sx={{ marginLeft: 40, marginTop: 5 }}> <MainButton text={'Continue to Book'} /></Box>
            <Box sx={{ marginLeft: 40, marginTop: 2, marginBottom: 3 }}> <Button sx={{ backgroundColor: '#F5F6F8', color: "#B3B3B3", width: 200 }}>Cancel</Button></Box>
            <AppBar component="nav" sx={{ position: 'relative', alignItems: 'center', backgroundColor: "#ffff", height: 80 }}></AppBar>
        </Box>
    )
}

export default BookingTable

