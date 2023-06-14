import {  useQuery } from "@tanstack/react-query";


const UseClasses = () => {
    



    const { data: martialClass = [], refetch  } = useQuery(['marttialclass'], async () => {
        const res = await fetch('https://infinitymarttialarts.vercel.app/classes');
        return res.json();
      });

    return [martialClass,refetch]

};

export default UseClasses;