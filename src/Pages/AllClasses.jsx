
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAdmin from '../Hooks/UseAdmin';
import useAuth from '../Hooks/useAuth';
import UseClasses from '../Hooks/UseClasses';
import UseInstructor from '../Hooks/UseInstructor';
import useSelectedClass from '../Hooks/useSelectedClass';

const AllClasses = () => {
    const {user} = useAuth();
    const {refetch} = useSelectedClass();
    const [isAdmin] = UseAdmin();
const [isInstructor]= UseInstructor();
    const [martialClass] = UseClasses();
    const location= useLocation();
    const navigate = useNavigate();

   
    const handleAddToCart = selectedClass =>{
      console.log(selectedClass);
      if(user){ 
        const classDetails ={classid:selectedClass._id,
          Name:selectedClass.Name,
          Image:selectedClass.Image,
          AvailableSeats:selectedClass.AvailableSeats,
          InstructorName:selectedClass.InstructorName,
          Price:selectedClass.Price,
          
          email:user.email}
        fetch('http://localhost:5000/selected',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(classDetails)
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
           
            Swal.fire(
              'Well Done!',
              'Class added To Cart!',
              'success'
            )
            refetch();
          }
        })
        
      }

      else{
        
Swal.fire({
  title: 'Need to Login',
  text: "With out login you can't add it!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'login!'
}).then((result) => {
  if (result.isConfirmed) {
    navigate('/login', {state:{from: location}}) 
  }
})
      }
      
    }
   
    console.log(martialClass);

 
    return (
       <div>
         <div className='grid grid-cols-1
        md:grid-cols-2 mx-auto content-center	'>
            {martialClass.map((classItem) => {
              
 if (classItem.status === "Approve") {
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
          <div className="card-actions">
        
          <button onClick={()=>handleAddToCart(classItem)} className="btn glass bg-pink-700 text-white"  disabled={isAdmin || isInstructor ||classItem.AvailableSeats === 0} >Select</button>
        
          </div>
        </div>
      </div>
              </div>
    );
  } else {
    return null; // Don't render anything if status is not "Approve"
  }
})}
        </div>
       </div>
    );
};

export default AllClasses;