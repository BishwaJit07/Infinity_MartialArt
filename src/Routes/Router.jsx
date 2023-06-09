import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Classes from "../Pages/Classes";
import Dashboard from "../Pages/Dashboard";
import Instructors from "../Pages/Instructors";
import Login from "../SignUp/Login";

import SignUp from "../SignUp/SignUp";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
            ,
            {
                path:"/instructors",
                element:<Instructors/>
            }
            ,
            {
                path:"/classes",
                element:<Classes/>
            }
            ,
            {
                path:"/dashboard",
                element:<Dashboard/>
            }
            ,
            {
                path:"/login",
                element:<Login/>
            }
            ,
            {
                path:"/signup",
                element:<SignUp/>
            }
        ]
    }

]);

export default router;