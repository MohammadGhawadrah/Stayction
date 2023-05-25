import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const StyledTepoImg = styled('div')({
    height: '36px',
    width: '230px',
    marginTop: '150px',
    position: 'absolute',
});
function MostImageComment({ text }) {
    return (
        <Box><StyledTepoImg>
            <Typography variant="h6" color={"white"}>{text}</Typography>
        </StyledTepoImg>
        </Box>
    )
}
export default MostImageComment
