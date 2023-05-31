import HomePage from "./Pages/HomePage";
import DetailesPage from "./Pages/DetailesPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import BookingPage from "./Pages/BookingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import React from 'react'
import Layout from './Pages/Layout';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/Detailes/:productId" element={<DetailesPage />} />
                    <Route path="/Booking" element={<BookingPage />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/SignUp" element={<SignUpPage />} />
                </Route>
                <Route path="*" element={<>4040page not found</>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router
