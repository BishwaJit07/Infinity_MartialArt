import { useQuery } from '@tanstack/react-query';

import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const UseAdmin = () => {

    const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {data:isAdmin=[],isLoading: isAdminLoading} = useQuery({
    queryKey:['isAdmin', user?.email],
    enabled:!!user?.email && !! localStorage.getItem('jwt-access-token'),
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`)
        console.log('check if user is admin',res);
        return res.data.admin;
    }
  })

   return[isAdmin,isAdminLoading]
};

export default UseAdmin;