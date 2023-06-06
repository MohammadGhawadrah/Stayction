import React from 'react'
import BookingInformationBar from '../../Component/BookingInformationBar'
import { Box, Container, CssBaseline } from '@mui/material'
import CompletePageNo from '../../Component/CompletePageNo'
import CompleteTitle from '../../Component/CompleteTitle'
function CompletedPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <BookingInformationBar />
                <CompletePageNo />
                <CompleteTitle />
            </Container>
        </React.Fragment>
    )
}

export default CompletedPage
