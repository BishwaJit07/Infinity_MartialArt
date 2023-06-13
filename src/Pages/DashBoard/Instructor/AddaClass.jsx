import { useNavigate } from 'react-router-dom';


import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';


const AddaClass = () => {
    const {user}= useAuth();
    const navigate = useNavigate();

  const [classData, setClassData] = useState({
    Name: "",
    Image: "",
    InstructorName: user.displayName,
    InstructorEmail: user.email,
    AvailableSeats: "",
    Price: "",
    status: "pending",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClassData((prevData) => ({
      ...prevData,
      [name]: name === "Price" ? parseInt(value) : value,
    }));
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    console.log(classData);
    // Reset the form
    setClassData({
      Name: "",
      Image: "",
      InstructorName: user.displayName,
      InstructorEmail: user.email,
      AvailableSeats: "",
      Price: "",
      status: "pending",
    });

    fetch('http://localhost:5000/classes',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(classData)
        })
        .then(res=> res.json())
        .then(data => {
          if(data.insertedId){
           
            Swal.fire(
              'Well Done!',
              'Your Class is Added.Wait for approved',
              'success'
            );
            navigate('/dashboard/myclasses');
           
          }
        })
  };

    return (
        <div  
        style={{
            backgroundImage: "url(https://i.ibb.co/f1Gs03d/9rf6y86e.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            
               <form onSubmit={handleSubmit} >
               <p className=' text-pink-500 bg-blue-200 rounded text-4xl font-mono font-extrabold text-center mb-5'>Add Your Class</p>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold"  htmlFor="name">Name</label>
        <input 
          type="text"
          
          id="name"
          name="Name"
          className="input input-bordered input-accent w-full max-w-xs "
          required
          placeholder="Enter Name"
          value={classData.Name}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold" htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="Image"
          required
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Enter Image URL"
          value={classData.Image}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold" htmlFor="instructorName">Instructor Name</label>
        <input
          type="text"
          id="instructorName"
          name="InstructorName"
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Enter Instructor Name"
          required
          value={classData.InstructorName}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold" htmlFor="instructorEmail">Instructor Email</label>
        <input
          type="email"
          id="instructorEmail"
          name="InstructorEmail"
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Enter Instructor Email"
          required
          value={classData.InstructorEmail}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold" htmlFor="availableSeats">Available Seats</label>
        <input
          type="number"
          id="availableSeats"
          name="AvailableSeats"
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Enter Available Seats"
          required
          value={classData.AvailableSeats}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold" htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="Price"
          required
          className="input input-bordered input-accent w-full max-w-xs"
          placeholder="Enter Price"
          value={classData.Price}
          onChange={handleInputChange}
        />
      </div>
      <div className='m-2'>
        <label  className="text-white font-serif font-semibold">Status:</label>
        <select
          name="status"
          value={classData.status}
          onChange={handleInputChange}
        >
          <option value="pending">Pending</option>
          
        </select>
      </div>
      <div className=' text-center'>
        <button className='btn bg-pink-700 hover:bg-red-600 glass  text-white' type="submit">Submit Class</button>
      </div>
    </form>
        </div>
    );
};

export default AddaClass;