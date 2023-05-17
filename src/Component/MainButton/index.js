import * as React from 'react';
import Button from '@mui/material/Button';


export default function DisableElevation({ Text }) {
    return (
        <Button variant="contained" disableElevation>
            {Text}
        </Button>
    );
}