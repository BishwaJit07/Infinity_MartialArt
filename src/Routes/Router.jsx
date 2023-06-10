import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashBoard from "../Layouts/DashBoard";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses";


import AdminHome from "../Pages/DashBoard/Admin/AdminHome";
import InstructorHome from "../Pages/DashBoard/Instructor/InstructorHome";
import EnrollClass from "../Pages/DashBoard/Users/EnrollClass";
import MySelectedClass from "../Pages/DashBoard/Users/MySelectedClass";
import UserHome from "../Pages/DashBoard/Users/UserHome";
import Instructors from "../Pages/Instructors";
import Login from "../SignUp/Login";

import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


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
                path:"/Allclasses",
                element:<AllClasses/>
            }
            ,
            {
                path:"/dashboard",
                element:<DashBoard/>
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
    },

    {
        path:'dashboard',
        element:
            <DashBoard/>,
        
        children:[
            {
                path:'adminhome',
                element: <AdminHome/>,
            },

            {
                path:'userhome',
                element: <UserHome/>,
            },

            {
                path:'instructorhome',
                element: <InstructorHome/>,
            },
            
            {
                path:'enrollclass',
                element: <EnrollClass/>,
            },

            {
                path:'myclass',
                element: <MySelectedClass/>,
            }
        ]
    }

]);

export default router;