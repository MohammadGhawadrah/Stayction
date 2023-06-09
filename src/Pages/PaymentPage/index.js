import React from 'react'
import BookingInformationBar from '../../Component/BookingInformationBar'
import Box from '@mui/material/Box';
import PaymentPageNo from '../../Component/PaymentPageNo'
import PaymentTitle from '../../Component/PaymentTitle'
import PaymentTable from '../../Component/PaymentTable'
function PaymentPage() {
    return (
        <Box>
            <BookingInformationBar />
            <PaymentPageNo />
            <PaymentTitle />
            <PaymentTable />
        </Box>
    )
}

export default PaymentPage
