import * as React from 'react';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { theme } from "./style";
import CheckIcon from '@mui/icons-material/Check';
export default function CompletePageNo() {
    return (
        <Stack sx={theme.AddBooktheme} >
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumber}><CheckIcon /></Avatar></Box>
            <Box sx={theme.AddLine}></Box>
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumber}><CheckIcon /></Avatar></Box>
            <Box sx={theme.AddLine}></Box>
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumberWithoutColor}>3</Avatar></Box>
        </Stack>
    );
}

