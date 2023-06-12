import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import DashBoard from "../Layouts/DashBoard";
import Main from "../Layouts/Main";
import AllClasses from "../Pages/AllClasses";

import AllUser from "../Pages/DashBoard/Admin/AllUser";
import MangeClasses from "../Pages/DashBoard/Admin/MangeClasses";
import InstructorHome from "../Pages/DashBoard/Instructor/InstructorHome";
import EnrollClass from "../Pages/DashBoard/Users/EnrollClass";
import MySelectedClass from "../Pages/DashBoard/Users/MySelectedClass";
import UserHome from "../Pages/DashBoard/Users/UserHome";
import Instructors from "../Pages/Instructors";
import Login from "../SignUp/Login";

import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashHome from "../Pages/DashBoard/Admin/DashHome";




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
        element:<PrivateRoute>
                   <DashBoard/>
        </PrivateRoute>        
       ,
        children:[
            {
                path:'DashHome',
                element:<DashHome/> ,
            },
            {
                path:'manageclasses',
                element: <MangeClasses/>,
            },

            {
                path:'userhome',
                element: <UserHome/>,
            },
            {
                path:'alluser',
                element: <AllUser/>,
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
                element:<MySelectedClass/>,
            }
        ]
    }

]);

export default router;