import React from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ILoginValues } from "../../store/reducers/auth/types";
import * as Yup from "yup";
import { useActions } from "../../hooks/useActions";

const Login = () => {
    const { login } = useActions();
    const navigate = useNavigate();

    const initialValues: ILoginValues = {
        email: "",
        password: "",
    };

    const handleSubmit = async (values: ILoginValues) => {
        const result: any = await login(values);

        if (result.success) {
            navigate("/");
        }
    };

    const validationSchema = Yup.object<ILoginValues>({
        email: Yup.string()
            .email("Невірний формат пошти")
            .required("Вкажіт пошту"),
        password: Yup.string()
            .required("Вкажіть пароль")
            .min(6, "Мінімальна довжина паролю 6 символів"),
    });

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div
                className="flex flex-column gap-2"
                style={{
                    width: "30%",
                    alignItems: "center",
                    margin: "auto",
                    paddingTop: "20px",
                }}
            >
                <Avatar label="Q" size="xlarge" />
                <div
                    className="flex flex-column gap-2"
                    style={{ margin: "10px" }}
                >
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        aria-describedby="email-help"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <small style={{ color: "red" }} id="email-help">
                            {formik.errors.email}
                        </small>
                    ) : (
                        <small id="email-help"></small>
                    )}
                </div>
                <div
                    className="flex flex-column gap-2"
                    style={{ margin: "10px" }}
                >
                    <label htmlFor="password">Password</label>
                    <InputText
                        id="password"
                        aria-describedby="password-help"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <small style={{ color: "red" }} id="password-help">
                            {formik.errors.password}
                        </small>
                    ) : (
                        <small id="password-help"></small>
                    )}
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                    }}
                >
                    <Button type="submit">Login</Button>
                    <Link to="/">
                        <Button>Back</Button>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default Login;
