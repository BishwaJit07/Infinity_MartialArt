import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth();
    const location = useLocation();

    if(loading){
        return <div className="loading loading-bars loading-lg">
        </div>
     }
     if (user){
         return children;
         
     }
     return <Navigate to='/' state={{from:location}}> </Navigate>
};

export default PrivateRoute;