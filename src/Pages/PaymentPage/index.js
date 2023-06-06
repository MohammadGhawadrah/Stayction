import React from 'react'
import BookingInformationBar from '../../Component/BookingInformationBar'
import { Container, CssBaseline } from '@mui/material'
import PaymentPageNo from '../../Component/PaymentPageNo'
import PaymentTitle from '../../Component/PaymentTitle'
import PaymentTable from '../../Component/PaymentTable'
function PaymentPage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" >
                <BookingInformationBar />
                <PaymentPageNo />
                <PaymentTitle />
                <PaymentTable />
            </Container>
        </React.Fragment>
    )
}

export default PaymentPage
