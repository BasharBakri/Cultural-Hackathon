import React, { useContext, useEffect } from "react";
import { useInput } from "../hooks/useInput";
import useSubmit from "../hooks/useSubmit";
import { logInUser, registerUser } from "../utils/users.mjs";
import { LoginContext } from "../contexts/LoginContext";
import "./styles/Form.style.css";

const Form = ({ type }) => {
    const { logIn } = useContext(LoginContext);
    const [firstName, setFirstName] = useInput("");
    const [lastName, setLastName] = useInput("");
    const [username, setUsername] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    const [submittedData, handleSubmit] = useSubmit({});

    useEffect(() => {
        // send API request with submittedData
        console.log("form values", submittedData);
        switch (type) {
            case "signUp":
                registerUser(submittedData);
                // user registered successfully ? -> should i direct him to loginPage or log him in auto?
                break;
            case "login":
                const user = logInUser(
                    submittedData.username,
                    submittedData.password
                );
                user ? logIn() : null;
                break;
            default:
                break;
        }
    }, [submittedData]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userData = {
            userName: username,
            password: password,
        };
        if (type === "signUp") {
            userData.firstName = firstName;
            userData.lastName = lastName;
            userData.email = email;
        }
        handleSubmit(userData);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            {type === "signUp" && (
                <>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={setFirstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={setLastName}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={setEmail}
                    />
                </>
            )}
            <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={setUsername}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={setPassword}
            />
            <button type="submit">
                {type === "signUp" ? "Sign Up" : "Login"}
            </button>
        </form>
    );
};

export default Form;
