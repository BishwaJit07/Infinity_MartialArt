import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import UseClasses from '../../../Hooks/UseClasses';

const MyClasses = () => {
    const [martialClass] = UseClasses();
    const {user}= useAuth();
    return (
        <div>
         <div className='grid grid-cols-1
        md:grid-cols-2 mx-auto content-center	'>
            {martialClass.map((classItem) => {
              
 if (classItem.InstructorEmail === user.email) {
    return (
      <div key={classItem._id} >
        

      <div className={`${
              classItem.AvailableSeats === 0 ? "bg-red-500" : "bg-gray-300"
            } grid-card   shadow-2xl m-4 rounded-2xl`}>
        <figure className="px-10 pt-10">
        <img src={classItem.Image} alt={classItem.Name} className="rounded-xl w-96 h-80" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{classItem.Name}</h2>
          <p className='text-xl'><span className='font-semibold'>InstructorName: </span>{classItem.InstructorName}</p>
          <p className='badge badge-outline  text-xl  gap-2 font-semibold'>Price:${classItem.Price}</p>
          <p className='text-xl'><span className='font-semibold'>AVialable seat: </span>{classItem.AvailableSeats}</p>
          <p className='font-semibold my-2'>status: <span className='bg-red-600 text-white p-2 rounded-full'>{classItem.status}</span></p>
          {classItem?.status==="Deny" &&<p className='font-semibold'>AdminFeedBack: <span className='bg-green-600 text-white p-2 rounded '>{classItem?.feedback}</span></p>}
        </div>
      </div>
              </div>
    );
  } else {
    return null; 
  }
})}
        </div>
       </div>
    );
};

export default MyClasses;