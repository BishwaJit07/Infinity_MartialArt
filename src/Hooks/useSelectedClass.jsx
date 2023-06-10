import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelectedClass = () => {
    const {user}= useAuth();

    // const { data: martialClass = [],   } = useQuery(['marttialclass'], async () => {
    //     const res = await fetch('http://localhost:5000/classes');
    //     return res.json();
    //   });


    const { data: sClass = [], refetch } = useQuery(['sClass', user?.email], async () => {
        const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`);
        return res.json();
      });
    
      return { sClass, refetch };
    };

export default useSelectedClass;