
import { MdSportsMartialArts } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MySelectedClass = () => {

    const [axiosSecure] = useAxiosSecure();

  
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

              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
                <tr >
                  <th></th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src=''
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"></div>
                        <div className="text-sm opacity-50"></div>
                      </div>
                    </div>
                  </td>

                  {/* <td>
                    {user.role === "admin" ? (
                      <button className="btn bg-red-600 rounded-full" disabled>
                        <RiAdminLine className="text-white font-extrabold text-2xl" />
                      </button>
                    ) : (
                      <button
                        className="btn bg-red-600 rounded-full"
                        
                      >
                        <RiAdminLine className="text-white font-extrabold text-2xl" />
                      </button>
                    )}
                  </td> */}

                  {/* <td>
                    {user?.role1 === "instrctor" ? (
                      <button className="btn bg-blue-500 rounded-full" disabled>
                        <MdSportsMartialArts className="text-white font-extrabold text-2xl " />
                      </button>
                    ) : (
                      <button
                        
                        className="btn bg-blue-500 rounded-full"
                      >
                        <MdSportsMartialArts className="text-white font-extrabold text-2xl " />
                      </button>
                    )}
                  </td> */}
                </tr>
              
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MySelectedClass;