import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    padding: "16px 40px",
                    backgroundColor: "#F6F7FB",
                    height: "3000px",
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default GuestLayout;
