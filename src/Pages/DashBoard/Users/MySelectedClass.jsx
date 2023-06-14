
import { AiFillDelete } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import useSelectedClass from "../../../Hooks/useSelectedClass";

const MySelectedClass = () => {
  const { sClass, refetch } = useSelectedClass();
const [axiosSecure]= useAxiosSecure();
  console.log(sClass);

  const handleDelete = (userClasss) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selected/${userClasss._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your selected class has been deleted.", "success");
          }
        });
      }
    });
  };

  
 const navigate = useNavigate();
 
const handleNavigate =(userClasss)=>{
  navigate('/dashboard/payment',{
    state:{price: userClasss.Price,
      id:userClasss._id }
    
  })
}
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex justify-between">
          
         
        </div>
        <table className="table bg-gray-200 my-4">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Available Seat</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {Array.isArray(sClass) &&
              sClass.map((userClasss, index) => (
                <tr key={userClasss._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={userClasss.Image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{userClasss.Name}</div>
                        <div className="text-sm opacity-50">
                          {userClasss.InstructorName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{userClasss.AvailableSeats}</td>
                  <td>${userClasss.Price}</td>

                  <td
                    onClick={() => handleDelete(userClasss)}
                    className="btn bg-red-600 rounded-full m-2 hover:bg-red-900"
                  >
                    <AiFillDelete className="text-white text-xl " />
                  </td>
                  <td>
                  <button onClick={()=>handleNavigate(userClasss)}
             
            className="btn glass bg-yellow-600 text-white hover:bg-red-800"
          >
            Pay
          </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
