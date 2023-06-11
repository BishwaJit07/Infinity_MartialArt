import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  
  // const { data: sClass = [], refetch } = useQuery(['sClass', user?.email], async () => {
  //     const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`,{
  //       headers:{
  //         authorization:`userToken ${token}`
  //       }
  //     });
  //     return res.json();
  //   });

  const { refetch, data: sClass = [] } = useQuery({
    queryKey: ["sClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selected?email=${user?.email}`);
      console.log("res frm axios", res);
      return res.data;
    },
  });

  return { sClass, refetch };
};

export default useSelectedClass;
