import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Icon from '@mui/material/Icon';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { theme } from "./style";
export default function BookingPageNo() {
    return (
        <Stack sx={theme.AddBooktheme} >
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumber}>1</Avatar></Box>
            <Box sx={theme.AddLine}></Box>
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumberWithoutColor}>2</Avatar></Box>
            <Box sx={theme.AddLine}></Box>
            <Box sx={theme.AddCircle}><Avatar sx={theme.AddNumberWithoutColor}>3</Avatar></Box>
        </Stack>
    );
}

