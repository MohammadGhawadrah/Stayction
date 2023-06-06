import HomePage from "./Pages/HomePage";
import DetailsPage from "./Pages/DetailsPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import BookingPage from "./Pages/BookingPage";
import PaymentPage from "./Pages/PaymentPage"
import CompletedPage from "./Pages/CompletedPage"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from 'react'
import Layout from './Pages/Layout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/Details/:productId" element={<DetailsPage />} />

                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/SignUp" element={<SignUpPage />} />
                </Route>
                <Route path="/Booking/:productId" element={<BookingPage />} />
                <Route path="/Payment/:productId" element={<PaymentPage />} />
                <Route path="/Completed/" element={<CompletedPage />} />
                <Route path="*" element={<>4040page not found</>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router
