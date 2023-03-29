import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Admin from "./pages/admin";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import LoginProvider from "./contexts/LoginContext";
import AppProvider from "./contexts/AppContext";

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
      <AppProvider>
        <LoginProvider>
          <RouterProvider router={router} />
        </LoginProvider>
      </AppProvider>
    </div>
  );
}

export default App;
