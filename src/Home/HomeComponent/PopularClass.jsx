
import Titles from '../../Hooks/Titles';

import UseClasses from '../../Hooks/UseClasses';

const PopularClass = () => {
   const [martialClass]= UseClasses();
    return (
        <div>
        <Titles priHeading={"All Martial Art Class"} secHeading={'ChekOuts Our latest classes '}></Titles>
         <div className='grid grid-cols-1
        md:grid-cols-2 mx-auto content-center	'>
     {martialClass
  .filter(
    (classItem) => classItem.status === "Approve" && classItem.Price < 60
  )
  .slice(0, 6)
  .map((classItem) => (
    <div key={classItem._id}>
      <div
        className={`${
          classItem.AvailableSeats === 0 ? "bg-red-500" : "bg-gray-300"
        } grid-card shadow-2xl m-4 rounded-2xl`}
      >
        <figure className="px-10 pt-10">
          <img
            src={classItem.Image}
            alt={classItem.Name}
            className="rounded-xl w-96 h-80"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{classItem.Name}</h2>
          <p className="text-xl">
            <span className="font-semibold">InstructorName: </span>
            {classItem.InstructorName}
          </p>
          <p className="badge badge-outline text-xl gap-2 font-semibold">
            Price:${classItem.Price}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Available seat: </span>
            {classItem.AvailableSeats}
          </p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  ))}

        </div>
       </div>
    );
};

export default PopularClass;