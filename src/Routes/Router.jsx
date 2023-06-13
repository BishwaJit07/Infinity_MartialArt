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
import Payments from "../Pages/DashBoard/Payments";
import AddaClass from "../Pages/DashBoard/Instructor/addaClass";
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses";




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
                path:'dashhome',
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
                path:'addclasses',
                element: <AddaClass/>,
            },
            {
                path:'myclasses',
                element: <MyClasses/>,
            },

            {
                path:'enrollclass',
                element: <EnrollClass/>,
            },

            {
                path:'myclass',
                element:<MySelectedClass/>,
            },
            {
                path:'payment',
                element:<Payments/>,
            }
        ]
    }

]);

export default router;