import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Classes from "../Pages/Classes";
import Dashboard from "../Pages/Dashboard";
import Instructors from "../Pages/Instructors";
import Login from "../SignUp/Login";
import SigniIn from "../SignUp/signiIn";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
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
                element:<SigniIn/>
            }
        ]
    }

]);

export default router;