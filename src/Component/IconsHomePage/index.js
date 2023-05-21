import React from 'react';

import Typography from '@mui/material/Typography';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
function IconsHomePage() {


    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{ hight: 69, width: 128 }}>
                    <LuggageOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">806</Typography>
                        <Typography variant="h7" color="thired.main">treasure</Typography>
                    </Stack>
                </Box>

                <Box sx={{ hight: 69, width: 128 }}>
                    <CameraAltOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">80.409</Typography>
                        <Typography variant="h7" color="thired.main">travelers</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <PinDropOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">1.492</Typography>
                        <Typography variant="h7" color="thired.main">cities</Typography>
                    </Stack>
                </Box>
            </Grid>

        </Box>
    )
}

export default IconsHomePage



