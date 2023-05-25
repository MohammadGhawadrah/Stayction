import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { mostImageGridData } from './data';
import style from './style.module.css';
import Typography from '@mui/material/Typography';
function MostImageGrid() {
    return (
        <Box sx={{ position: 'relative' }}>
            <Typography variant="h3" color="primary">Most Picked</Typography>

            <Grid >{mostImageGridData[0].map((item) =>
                <Box>
                    <MostImage img={item.img} />
                    < PurpulComment text={item.topComment} />
                    <MostImageComment text={item.describtion} />
                </Box>
            )
            }</Grid>
            <div className={style.skeletoncontainer}>
                {mostImageGridData[1].map((item) =>
                    <Box>
                        <MostImage img={item.img} />
                        < PurpulComment text={item.topComment} />
                        <MostImageComment text={item.describtion} />
                    </Box>
                )
                }</div>
        </Box >)
}

export default MostImageGrid