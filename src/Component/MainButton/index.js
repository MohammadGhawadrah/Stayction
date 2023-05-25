import * as React from 'react';
import Button from '@mui/material/Button';


export default function MainButton({ text }) {
    return (
        <Button sx={{ width: 200 }} color="secondary" variant="contained" disableElevation>
            {text}
        </Button>
    );
}