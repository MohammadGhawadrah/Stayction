import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from "react";

function IndDecButton() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        { count > 0 ? setCount(count - 1) : setCount(count == 0) }
    }
    return (

        <ButtonGroup sx={{ border: 'none', fontSize: '24px', }}>
            <Button onClick={decrementCount} style={{ minWidth: 45, color: 'white', background: '#E74C3C' }} sx={{ m: 0, p: 0 }}>-</Button>
            <Button style={{ minWidth: 230, backgroundColor: '#F5F6F8', color: 'secondary' }} >{count} nights </Button>
            <Button onClick={incrementCount} style={{ minWidth: 45, color: 'white', background: '#1ABC9C' }} sx={{ m: 0, p: 0 }}>+</Button>
        </ButtonGroup>

    )
}

export default IndDecButton
