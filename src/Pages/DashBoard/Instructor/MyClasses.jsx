import React from 'react';
import Titles from '../../../Hooks/Titles';
import useAuth from '../../../Hooks/useAuth';
import UseClasses from '../../../Hooks/UseClasses';

const MyClasses = () => {
    const [martialClass] = UseClasses();
    const {user}= useAuth();
    return (
        <div>
          <Titles priHeading={"My Classes"} ></Titles>
        <table className="table bg-gray-200 m-4">
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Instructor</th>
      <th>Available Seats</th>
      <th>Price</th>
      <th>Feedback</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {martialClass.map((classItem) => {
      if (classItem.InstructorEmail === user.email) {
        const trClassName = classItem.AvailableSeats === 0 ||classItem.status==="Deny" ? "bg-red-500 text-white text-xl font-semibold p-4 rounded" : "";
        return (
          <tr key={classItem._id} >
            <td>
            <div className="mask mask-squircle w-20 h-20">
                        <img
                          src={classItem.Image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
              
            </td>
            <td>{classItem.Name}</td>
            <td>{classItem.InstructorName}</td>
            <td > 
            <span className={trClassName}>{classItem.AvailableSeats}</span></td>
            <td>${classItem.Price}</td>
            <td >{classItem.feedback}</td>
            <td>
              <span
                className={trClassName}
              >
                {classItem.status}
              </span>
            </td>
          </tr>
        );
      } else {
        return null;
      }
    })}
  </tbody>
</table>

       </div>
    );
};

export default MyClasses;