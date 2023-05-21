import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LivingOutlinedIcon from '@mui/icons-material/LivingOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
function IconsDetailPage() {


    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{ hight: 69, width: 128 }}>
                    <BedOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">5</Typography>
                        <Typography variant="h7" color="thired.main">bedroom</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <LivingOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">1</Typography>
                        <Typography variant="h7" color="thired.main"> living room</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <BathtubOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">3</Typography>
                        <Typography variant="h7" color="thired.main">bathroom</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <DiningOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">1</Typography>
                        <Typography variant="h7" color="thired.main">dining room</Typography>
                    </Stack>
                </Box>


            </Grid>

            {/*////////////////////////////////////////////////*/}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Box sx={{ hight: 69, width: 128 }}>
                    <WifiOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">10</Typography>
                        <Typography variant="h7" color="thired.main">mbp/s</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <ChromeReaderModeOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">7</Typography>
                        <Typography variant="h7" color="thired.main">  unit ready</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <KitchenOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">2</Typography>
                        <Typography variant="h7" color="thired.main"> refigrator</Typography>
                    </Stack>
                </Box>
                <Box sx={{ hight: 69, width: 128 }}>
                    <LiveTvOutlinedIcon color="primary" fontSize="large" />
                    <Stack spacing={{ xs: 2, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                        <Typography variant="h7" color="primary">4</Typography>
                        <Typography variant="h7" color="thired.main">television</Typography>
                    </Stack>
                </Box>


            </Grid>

        </Box>
    )
}

export default IconsDetailPage



