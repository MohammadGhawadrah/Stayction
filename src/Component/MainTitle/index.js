import React from 'react';
import { Typography } from '@mui/material';

function MainTitle({ text }) {
    return (
        <div>
            <Typography variant="h3" color="primary" marginBottom={"20px"} >{text}</Typography>
        </div>
    )
}
export default MainTitle
