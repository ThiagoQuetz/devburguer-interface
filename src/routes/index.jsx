import { createBrowserRouter } from "react-router-dom";
import { Login } from "../containers/Login";



export const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {

    }
])