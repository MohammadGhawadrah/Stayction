import React from 'react'
import BookingInformationBar from '../../Component/BookingInformationBar'
import Box from '@mui/material/Box';
import CompletePageNo from '../../Component/CompletePageNo'
import CompleteTitle from '../../Component/CompleteTitle'
function CompletedPage() {
    return (
        <Box>
            <BookingInformationBar />
            <CompletePageNo />
            <CompleteTitle />
        </Box>
    )
}

export default CompletedPage
