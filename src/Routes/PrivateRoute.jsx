import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth();
    const location = useLocation();

    if(loading){
        return <div ><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>
     }
     if (user){
         return children;
         
     }
     return <Navigate to='/' state={{from:location}}> </Navigate>
};

export default PrivateRoute;