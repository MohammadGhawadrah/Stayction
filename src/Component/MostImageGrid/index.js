import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import { mostImageGridData } from './data';
import style from './style.module.css';
import MainTitle from '../MainTitle';
function MostImageGrid() {
    return (
        <Box sx={{ height: 600 }}>
            <MainTitle text={"Most Picked"} />
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