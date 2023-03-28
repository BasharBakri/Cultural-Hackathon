import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/admin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
    const router = new createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/admin",
                    element: <Admin />,
                },
                {
                    path: "/signup",
                    element: <SignUp />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
            ],
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
