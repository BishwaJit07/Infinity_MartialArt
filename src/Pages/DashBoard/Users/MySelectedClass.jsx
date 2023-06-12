import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useSelectedClass from "../../../Hooks/useSelectedClass";



const MySelectedClass = () => {



const {sClass}= useSelectedClass();
  
console.log(sClass);

const total = Array.isArray(sClass)
? sClass.reduce((sum, item) => item.Price + sum, 0)
: 0;

    return (
        <div>
              <div className="overflow-x-auto">
                <div className="flex justify-between"><p className="text-xl font-bold">Total:${total}</p>
                <Link to='/dashboard/payment' className="btn btn-secondary text-white hover:bg-red-500">Pay</Link></div>
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
            
               {Array.isArray(sClass) &&sClass.map((userClasss,index)=>
              
                  <tr key={sClass._id}>
                  <th>{index+1}</th>
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
                        <div className="text-sm opacity-50">{userClasss.InstructorName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{userClasss.AvailableSeats}</td>
                <td>${userClasss.Price}</td>
                
                
                </tr>
                 
                )} 
              
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MySelectedClass;