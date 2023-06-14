import { useQuery } from '@tanstack/react-query';

import Titles from '../../../Hooks/Titles';
import useAuth from '../../../Hooks/useAuth';

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import UseClasses from '../../../Hooks/UseClasses';

const EnrollClass = () => {
    const [axiosSecure]= useAxiosSecure()
    const {data: paid = []} = useQuery({
        queryKey:['payment'],
        queryFn : async()=>{
          const res = await axiosSecure('/payment')
          return res.data;
        }

  })

  
const {user}=useAuth();

    return (
        <div>
            <Titles priHeading={"My Enrolled Classes"} secHeading={'Never Give up,Keep practise'}></Titles>
         

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

            {Array.isArray(paid) &&
  paid.map((paidClass, index) => {
    if (paidClass?.email === user?.email) {
      return (
        <tr key={paidClass._id}>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={paidClass?.Image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="font-bold">{paidClass?.Name}</div>
                <div className="text-sm opacity-50">
                  {paidClass?.InstructorName}
                </div>
              </div>
            </div>
          </td>
          <td>{paidClass?.AvailableSeats}</td>
          <td>${paidClass?.Price}</td>
          <td>
            <span className="bg-green-300 text-black p-2">Paid</span>
          </td>
        </tr>
      );
    }
    return null;
  })}

          </tbody>
        </table>
      </div>
        </div>
    );
};

export default EnrollClass;