import { useQuery } from "@tanstack/react-query";



const MySelectedClass = () => {

  // const { data: selectedClass = [],   } = useQuery(['selectedClass'], async () => {
  //   const res = await fetch('http://localhost:5000/selected');
  //   return res.json();
  // });


  
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
            
               {
              
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

                
                
                </tr>
                 
                } 
              
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MySelectedClass;