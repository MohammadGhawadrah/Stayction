import React from 'react'
import BookingInformationBar from '../../Component/BookingInformationBar'
import BookingPageNo from '../../Component/BookingPageNo'
import { Box, Container, CssBaseline } from '@mui/material'
import BookingTitle from '../../Component/BookingTitle'
import BookingTable from '../../Component/BookingTable'
function BookingPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <BookingInformationBar />
                <BookingPageNo />
                <BookingTitle />
                <BookingTable />
            </Container>
        </React.Fragment>
    )
}

export default BookingPage
