import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Form type="signUp" />
            <Link to="/login">Already a member?</Link>
        </div>
    );
};

export default SignUp;
