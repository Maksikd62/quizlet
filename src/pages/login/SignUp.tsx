import React from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ISignUpValues } from "../../store/reducers/auth/types";
import * as Yup from "yup";
import { useActions } from "../../hooks/useActions";

const SignUp = () => {
    const { signUp } = useActions();
    const navigate = useNavigate();

    const initialValues: ISignUpValues = {
        email: "",
        password: "",
        confirmedPassword: "",
        userName: "",
        firstName: "",
        lastName: "",
    };

    const handleSubmit = async (values: ISignUpValues) => {
        const result: any = await signUp(values);

        if (result.success) {
            navigate("/");
        }
    };

    const validationSchema = Yup.object<ISignUpValues>({
        email: Yup.string()
            .email("Невірний формат пошти")
            .required("Вкажіть пошту"),
        password: Yup.string()
            .required("Вкажіть пароль")
            .min(6, "Мінімальна довжина паролю 6 символів"),
        confirmedPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Паролі мають співпадати")
            .required("Підтвердіть пароль"),
        userName: Yup.string()
            .required("Вкажіть ім'я користувача")
            .min(3, "Мінімум 3 символи"),
        firstName: Yup.string()
            .required("Вкажіть ім'я")
            .min(2, "Мінімум 2 символи"),
        lastName: Yup.string()
            .required("Вкажіть прізвище")
            .min(2, "Мінімум 2 символи"),
    });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div
                className="flex flex-column gap-3"
                style={{
                    width: "30%",
                    alignItems: "center",
                    margin: "auto",
                    paddingTop: "20px",
                }}
            >
                <Avatar label="Q" size="xlarge" className="mb-3" />
                <div className="flex gap-3 w-full">
                    <div className="flex flex-column w-full">
                        <label htmlFor="firstName">First Name</label>
                        <InputText
                            id="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ width: "100%" }}
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <small style={{ color: "red" }}>{formik.errors.firstName}</small>
                        )}
                    </div>
                    <div className="flex flex-column w-full">
                        <label htmlFor="lastName">Last Name</label>
                        <InputText
                            id="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            style={{ width: "100%" }}
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <small style={{ color: "red" }}>{formik.errors.lastName}</small>
                        )}
                    </div>
                </div>
                <div className="flex flex-column w-full">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ width: "100%" }}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <small style={{ color: "red" }}>{formik.errors.email}</small>
                    )}
                </div>
                <div className="flex flex-column w-full">
                    <label htmlFor="userName">User Name</label>
                    <InputText
                        id="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ width: "100%" }}
                    />
                    {formik.touched.userName && formik.errors.userName && (
                        <small style={{ color: "red" }}>{formik.errors.userName}</small>
                    )}
                </div>
                <div className="flex flex-column w-full">
                    <label htmlFor="password">Password</label>
                    <InputText
                        id="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ width: "100%" }}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <small style={{ color: "red" }}>{formik.errors.password}</small>
                    )}
                </div>
                <div className="flex flex-column w-full">
                    <label htmlFor="confirmedPassword">Confirm Password</label>
                    <InputText
                        id="confirmedPassword"
                        type="password"
                        value={formik.values.confirmedPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ width: "100%" }}
                    />
                    {formik.touched.confirmedPassword && formik.errors.confirmedPassword && (
                        <small style={{ color: "red" }}>{formik.errors.confirmedPassword}</small>
                    )}
                </div>
                <div className="flex justify-content-between w-full">
                    <Button type="submit">Sign Up</Button>
                    <Link to="/">
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
