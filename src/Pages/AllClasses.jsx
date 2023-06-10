
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import UseClasses from '../Hooks/UseClasses';

const AllClasses = () => {
    const {user} = useAuth();
    const [martialClass,isclassloading] = UseClasses();
   
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
    {user ? (
    <button className="btn glass bg-pink-700 text-white">Buy Now</button>
  ) : (
    <button className="btn glass bg-pink-700 text-white"  onClick={() =>
        Swal.fire({
          title: 'Please log in',
          text: 'Please log in before selecting the course.',
          icon: 'warning',
          confirmButtonText: 'OK'
        }) }>
      Buy Now
    </button>
  )}
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