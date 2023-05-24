import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import style from './style.module.css';

function PurpulComment({ Text }) {
    return (
        <Box className={style.topComment}>
            <Typography className={style.topComment} color={"fifth.main"} backgroundColor={"forth.main"} variant="h6"
            >{Text}</Typography>
        </Box>
    )
}

export default PurpulComment
