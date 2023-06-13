
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const UseInstructor = () => {

    const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data:isInstructor=[],isLoading: isInstructorLoading} = useQuery({
    queryKey:['isInstructor', user?.email],enabled:!!user?.email && !! localStorage.getItem('jwt-access-token'),
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
        console.log('check if user is instructor',res);
        return res.data.instructor;
    }
  })
console.log(isInstructor);
   return[isInstructor,isInstructorLoading]
};

export default UseInstructor;