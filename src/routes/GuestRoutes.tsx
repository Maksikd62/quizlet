import React from "react";
import { Route, Routes } from "react-router-dom";
import GuestLayout from "../components/layouts/guestLayout/GuestLayout";
import MainPage from "../pages/mainPage/MainPage";
import Login from "../pages/login/Login";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const GuestRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<GuestLayout />}>
                <Route index element={<MainPage />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
};

export default GuestRoutes;
