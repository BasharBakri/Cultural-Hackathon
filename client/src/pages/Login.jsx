import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <Form type="login" />
            <Link to="/signup">Not a member?</Link>
        </div>
    );
};

export default Login;
