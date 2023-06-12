import React from 'react';
import { MdSportsMartialArts } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import UseClasses from '../../../Hooks/UseClasses';
import { AuthContext } from '../../../Providers/AuthProvider';

const MangeClasses = () => {
    const {user}=AuthContext;
    const [martialClass] = UseClasses();
    return (
        <div>
            <div className="overflow-x-auto">
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
             <th>Instructor</th>
              <th>AvailableSeats</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {martialClass.map((classItem,index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classItem.Image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classItem.Name}</div>
                        <div className="text-sm opacity-50">{classItem.email}</div>
                      </div>
                    </div>
                  </td>
               <td>
               <div className="flex items-center space-x-3">
            
            <div>
              <div className="font-bold">{classItem.InstructorName}</div>
              <div className="text-sm opacity-50">{classItem?.email}</div>
            </div>
            </div>
               </td>
                  <td>
                  {classItem.AvailableSeats}
                  </td>

                  <td>
                   ${classItem.Price}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MangeClasses;