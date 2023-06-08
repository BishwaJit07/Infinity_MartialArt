import React from 'react';
import { Link } from 'react-router-dom';

const SigniIn = () => {
    return (
        
             <div className="hero min-h-screen  bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/5hdDdk7/vecteezy-chinese-boxing-kung-fu-martial-art-famous-sport-two-boxer-18995494.jpg')" }}>

         
<form  className="card-body bg-gray-700 rounded-xl bg-transparent bg-opacity-40 w-96 h-96">
     <div className="form-control ">
     <h2 className='text-2xl font-semibold text-white'>Please SignUp</h2>
       <label className="label">
         <span className="label-text text-white">Email</span>
       </label>
       <input type="email" placeholder="email" 
       name='email'
       className="input input-bordered" />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text text-white">Password</span>
       </label>
       <input type="password" placeholder="password" 
       name='pass'
       className="input input-bordered" />
     
     </div>

     <div className="form-control flex justify-center items-center">
       <label className="label">
       
       

       </label>

     
     </div>
     <div className="form-control mt-6">
    <input className="btn btn-primary" type="submit" value="Login" />
       <label className="label">
         <Link to="/login" className="label-text-alt link link-hover text-white">Already Have Account? Login</Link>
       </label>
     </div>
   </form>
        </div>
    );
};

export default SigniIn;