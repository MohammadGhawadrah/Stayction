import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PurpulComment from '../PurpulComment';
import MostImageComment from '../MostImageComment';
import MostImage from '../MostImage';
import style from './style.module.css';
import MainTitle from '../MainTitle';
import { useState } from "react";
import axios from "axios";
import Loading from '../Loading';

function MostImageGrid() {
    const [mostImageGridData, setmostImageGridData] = useState();
    const getData = async () => {
        const response = await axios.get("https://run.mocky.io/v3/65196087-1c46-40ce-abc8-4336afbbc01c")
        const { data } = response
        /* const Hotels = data.filter(({ title }) => title === "Hotels");*/
        setmostImageGridData(data)
    }
    useEffect(() => getData, [])
    return (
        <Box sx={{ height: 600 }}>
            <MainTitle text={"Most Picked"} />
            {mostImageGridData ?
                <Grid>
                    <Grid >{mostImageGridData[0].map((item) =>
                        <Box>
                            <MostImage img={item.img} />
                            < PurpulComment text={item.topComment} />
                            <MostImageComment text={item.description} />
                        </Box>
                    )
                    }</Grid>
                    <div className={style.skeletoncontainer}>
                        {mostImageGridData[1].map((item) =>
                            <Box>
                                <MostImage img={item.img} />
                                < PurpulComment text={item.topComment} />
                                <MostImageComment text={item.description} />
                            </Box>
                        )
                        }</div>
                </Grid> : <Loading />}</Box >)
}
export default MostImageGrid