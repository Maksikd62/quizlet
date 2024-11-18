import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./style.css";

const headerStyles: React.CSSProperties = {
    height: "64px",
    left: "0px",
    top: "0px",
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: "#0A092D",
    padding: "5px 15px",
};

const UserNavbar = () => {
    return (
        <header style={headerStyles}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/">
                    <span
                        style={{
                            fontSize: "2em",
                            flexGrow: "1",
                            color: "#4247e8",
                            fontWeight: "bold",
                        }}
                    >
                        Quilzer
                    </span>
                </Link>
            </div>
            <div
                style={{
                    flexGrow: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                }}
            >
                <Button
                    className="sub-btn"
                >
                    Підписатися
                </Button>
                <img width={40} height={40} src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" style={{margin: "0px 16px", borderRadius: "50%"}}/>
            </div>
        </header>
    );
};

export default UserNavbar;
