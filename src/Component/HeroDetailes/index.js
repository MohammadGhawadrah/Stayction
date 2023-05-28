import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MostImage from '../MostImage';
import img1 from '../../Assets/detail-1.png';
import img2 from '../../Assets/detail-2.png';
import img3 from '../../Assets/detail-3.png';
import { Grid } from '@mui/material';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function HeroDetailes() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography color="text.primary">Detailes</Typography>
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
                <Grid> <MostImage img={img1} /></Grid></Stack>
        </div>
    );
}