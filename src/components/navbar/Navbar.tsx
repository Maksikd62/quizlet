import React from "react";
import { useRef } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import "./style.css";

const headerStyles: React.CSSProperties = {
    height: "64px",
    left: "0px",
    top: "0px",
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: "#FFFFFF",
    padding: "5px 15px",
};

const Navbar = () => {
    const menuLeft = useRef<any>(null);
    const toast = useRef(null);

    const toggleMenu = (event: any) => {
        if (menuLeft != null && menuLeft.current != null) {
            menuLeft.current.toggle(event);
        }
    };

    const items = [
        {
            label: "Учні",
            items: [
                {
                    label: "Картки",
                    icon: "pi pi-refresh",
                },
                {
                    label: "Тест",
                    icon: "pi pi-upload",
                },
            ],
        },
        {
            label: "Вчителі",
            items: [
                {
                    label: "Live",
                    icon: "pi pi-refresh",
                },
                {
                    label: "Перевірка",
                    icon: "pi pi-upload",
                },
            ],
        },
    ];

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
                <div style={{marginLeft: "8px"}}>
                    <Toast ref={toast}></Toast>
                    <Menu
                        model={items}
                        popup
                        ref={menuLeft}
                        id="popup_menu_left"
                    />
                    <Button
                        link
                        label="Навчальні інтструменти"
                        className="mr-2"
                        onClick={(event) => toggleMenu(event)}
                        aria-controls="popup_menu_left"
                        aria-haspopup
                        style={{color: "black"}}
                    />
                </div>
            </div>
            <div
                style={{
                    flexGrow: "1",
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                }}
            >
                <Button
                    label="Створити"
                    style={{ margin: "8px", backgroundColor: "#4247e8" }}
                />
                <Link to="/login">
                    <Button
                        label="Login"
                        style={{ margin: "8px", backgroundColor: "#4247e8" }}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
