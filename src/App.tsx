import React, { useEffect } from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { AuthActionTypes, IUserModel } from "./store/reducers/auth/types";
import { PrimeReactProvider } from "primereact/api";
import { useTypedSelector } from "./hooks/useTypedSelector";
import UserRouters from "./routes/UserRoutes";
import GuestRoutes from "./routes/GuestRoutes";

function App() {
    const dispatch = useDispatch();
    const { isAuth } = useTypedSelector((state) => state.authReducer);

    // login user
    useEffect(() => {
        const accessToken = localStorage.getItem("aut");

        if (accessToken) {
            const jwt = jwtDecode<IUserModel>(accessToken);

            const user: IUserModel = {
                id: jwt.id,
                email: jwt.email,
                firstName: jwt.firstName,
                lastName: jwt.lastName,
                role: jwt.role,
            };

            dispatch({ type: AuthActionTypes.SIGN_IN, payload: user });
        }
    }, []);

    return (
        <PrimeReactProvider>
            {isAuth ? <UserRouters /> : <GuestRoutes />}
        </PrimeReactProvider>
    );
}

export default App;
