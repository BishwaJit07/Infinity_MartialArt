import { useQuery } from "@tanstack/react-query";
import Titles from "../Hooks/Titles";

const Instructors = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  console.log(users);


  return (
   <div>
     <Titles priHeading={"Popular Instructors"} secHeading={'some of our top Instructor'}></Titles>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center ">
    {Array.isArray(users) &&
      users.map((user) => {
        if (user.role1 === "instructor") {
          return (
            <div key={user._id} className="max-w-xs mx-auto">
              <div className="card bg-gray-300 shadow-2xl h-96 mb-4">
                <figure className="px-10 pt-10 mt-2">
                  <img  src={user.photoURL} className="rounded-xl  w-80 h-96" alt="User" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{user.name}</h2>
                  <p>{user.email}</p>
                  <div className="card-actions"></div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
  </div>
   </div>

  )}

export default Instructors;
