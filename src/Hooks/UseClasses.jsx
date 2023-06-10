import {  useQuery } from "@tanstack/react-query";


const UseClasses = () => {
    
// const [martialClass, setmartialClass] = useState([])
//            const [loading,setLoading]= useState(true);

//     useEffect(()=>{
//         fetch('http://localhost:5000/classes')
//         .then(res=> res.json())
//         .then(data=>{
//             setmartialClass(data)})
//            setLoading(false)
//     },[])


    const { data: martialClass = [],   } = useQuery(['marttialclass'], async () => {
        const res = await fetch('http://localhost:5000/classes');
        return res.json();
      });

    return [martialClass]

};

export default UseClasses;