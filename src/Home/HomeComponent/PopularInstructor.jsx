import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PopularInstructor = () => {
    const [axiosSecure]= useAxiosSecure()
    const {data: instructors = {}} = useQuery({
        queryKey:['classes'],
        queryFn : async()=>{
          const res = await axiosSecure('/users')
          return res.data;
        }

  })
  console.log(instructors);
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center ">
            
  {Array.isArray(instructors) &&
  instructors
    .filter((user) => user.role1 === "instructor")
    .slice(0, 6)
    .map((user) => {
      return (
        <div key={user._id} className="max-w-xs mx-auto">
          <div className="card bg-gray-300 shadow-2xl h-96 mb-4">
            <figure className="px-10 pt-10 mt-2">
              <img src={user.photoURL} className="rounded-xl w-80 h-96" alt="User" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <div className="card-actions"></div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

    );
};

export default PopularInstructor;