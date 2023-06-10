
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import UseClasses from '../Hooks/UseClasses';

const AllClasses = () => {
    const {user} = useAuth();
    const [martialClass,isclassloading] = UseClasses();
    const location= useLocation();
    const navigate = useNavigate();
    
    const handleAddToCart = selectedClass =>{
      console.log(selectedClass);
      if(user){ 
        fetch('http://localhost:5000/selected',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(selectedClass)
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
           
            Swal.fire(
              'Well Done!',
              'Class added To Cart!',
              'success'
            )
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

    if (isclassloading) {
        return <div className='flex justify-center items-center '><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>;
      }
    return (
       <div>
         <div className='grid grid-cols-1
        md:grid-cols-2 mx-auto content-center	'>
            {martialClass.map((classItem) => (
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
  
    <button onClick={()=>handleAddToCart(classItem)} className="btn glass bg-pink-700 text-white">Select</button>
  
    </div>
  </div>
</div>
        </div>
      ))}
        </div>
       </div>
    );
};

export default AllClasses;