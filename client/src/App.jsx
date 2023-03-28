import { createContext, useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/admin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Loading from "./components/loading/Loading";
import LoginProvider from "./contexts/LoginContext";

export const AppContext = createContext();

function App() {
    const [playLoading, setPlayLoading] = useState(false);
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
            <AppContext.Provider
                value={{
                    loading: {
                        play: () => setPlayLoading(true),
                        pause: () => setPlayLoading(false),
                    },
                }}
            >
                {playLoading && <Loading />}
                <LoginProvider>
                    <RouterProvider router={router} />
                </LoginProvider>
            </AppContext.Provider>
        </div>
    );
}

export default App;
