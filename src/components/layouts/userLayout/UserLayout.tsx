import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import UserNavbar from "../../userNavbar/UserNavbar";

const UserLayout = () => {
    return (
        <div>
            <UserNavbar />
            <div
                style={{
                    padding: "16px 40px",
                    backgroundColor: "#0A092D",
                    height: "3000px",
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default UserLayout;
