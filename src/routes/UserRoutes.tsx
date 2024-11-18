import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLayout from "../components/layouts/userLayout/UserLayout";
import UserHomePage from "../pages/userPages/userHomePage/UserHomePage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

const UserRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route index element={<UserHomePage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
};

export default UserRouters;
