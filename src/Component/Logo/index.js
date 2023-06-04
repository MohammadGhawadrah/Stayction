import React from 'react'
import Typography from '@mui/material/Typography';
import style from './style.module.css';
function Logo() {
    return (

        <Typography
            variant="h6"
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
            Stay<b className={style.blogo} >cation</b>
        </Typography>

    )
}

export default Logo
