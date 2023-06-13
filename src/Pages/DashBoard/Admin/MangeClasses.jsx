import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

import UseClasses from "../../../Hooks/UseClasses";
import { AuthContext } from "../../../Providers/AuthProvider";

const MangeClasses = () => {
  const { user } = AuthContext;
  const [feedback, setFeedback] = useState("");
  const [statusN, setStatusN] = useState("");
  const [martialClass,refetch] = UseClasses();
  

  const handleFeedbackChange = (event) => {
    const { value } = event.target;

    setFeedback(value);
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;

    setStatusN(value);
  };

  const handleSubmit = async (classItem) => {
    console.log(classItem._id, feedback, statusN);
    if (!statusN || !feedback) {
      // Status or feedback is empty, display an error message
      console.log("Status and feedback are required");
      return;
    }

    fetch(`https://infinitymarttialarts.vercel.app/classes/${classItem._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: classItem._id,
        feedback: feedback,
        status: statusN,
        enrolled: 0,
      }),
    })
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {   refetch();
          
          Swal.fire({
            title: "Sweet!",
            text: 'done',
            imageUrl:
              "https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
          }); 
        }
      })
      .catch((error) => {
        // Handle error
        console.log("Error updating feedback and status:", error);
      });
  };

 
  return (
    <div>
      <h3 className="text-center text-pink-700 text-4xl font font-semibold font-serif">Manage all Classes</h3>
      <div className="overflow-x-auto">
        <table className="table bg-gray-200 m-4">
          {/* head */}
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Name</th>
              <th>Instructor</th>
              <th>AvailableSeats</th>
              <th>Price</th>
              <th>Feedback</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {martialClass.map((classItem, index) => (
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
                      <div className="text-sm opacity-50">
                        {classItem.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">
                        {classItem.InstructorName}
                      </div>
                      <div className="text-sm opacity-50">
                        {classItem?.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{classItem.AvailableSeats}</td>

                <td>${classItem.Price}</td>
                    
                <td>
                  <textarea
                    className="textarea textarea-secondary"
                    placeholder={classItem?.feedback||'enter feedback'}
                    
                    onChange={(event) => handleFeedbackChange(event, classItem)}
                  ></textarea>
                </td>
                <td>
                  <select
                    className="select select-primary w-full max-w-xs"
                    defaultValue={classItem?.status}
                    onChange={(event) => handleStatusChange(event, classItem)}
                  >
                    <option disabled value= {classItem?.status}>
                    {classItem?.status}
                    </option>
                    <option value="Approve">Approve</option>
                    <option value="Deny">Deny</option>
                  </select>
                </td>
                <td className="btn bg-amber-400" onClick={() => handleSubmit(classItem)}>
                  Submit
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
