import React, { useState, useEffect, createContext } from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem("isLoggedIn"));
        return storedValue !== null ? storedValue : false;
    });
    const [isAdmin, setIsAdmin] = useState(() => {
        const storedValue = JSON.parse(localStorage.getItem("isAdmin"));
        return storedValue !== null ? storedValue : false;
    });

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem("isLoggedIn"));
        setIsLoggedIn(storedValue || false);
    }, []);

    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const logIn = async (userApiToken) => {
        setIsLoggedIn(true);
        const userToken = await userApiToken;
        localStorage.setItem("userToken", JSON.stringify(await userToken));
    };

    const logOut = () => {
        isAdmin ? setIsAdmin(false) : setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn"); // remove isLoggedIn from localStorage
        localStorage.removeItem("userToken");
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, logIn, logOut, isAdmin }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
