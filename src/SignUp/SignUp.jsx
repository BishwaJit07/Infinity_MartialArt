import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
  const password = watch("pass"); 

  const {createUser,updateUser}=useAuth();



const onSubmit=data=>{

  createUser(data.email, data.pass)
  .then(res=>{
    const loggedUser = res.user;
    console.log(loggedUser);

    updateUser(data.name, data.photoURL)
    .then(()=>{
         console.log('user data updated');
         reset();
    })
    .catch((error) => {
      console.log('user data update failed', error);
    });
  })
  
 
  navigate('/');
}
//   // const handleSignin =(e)=>{
//   //   e.preventDefault();
//   //   const form = e.target;
//   //   const email = form.email.value;
//   //   const password = form.pass.value;
//   //   const confirmPassword = form.Confirmpass.value;
//   //   const PhotoUrl = form.photoUrl.value;
//   //   console.log(email,password,confirmPassword,PhotoUrl);

    
// }

  return (
    <div
      className="hero min-h-screen  "
     
    >
      <form className="card-body     w-2/4  rounded-xl  bg-cover bg-center" onSubmit={handleSubmit(onSubmit)}  style={{
        backgroundImage:
          "url('https://i.ibb.co/5hdDdk7/vecteezy-chinese-boxing-kung-fu-martial-art-famous-sport-two-boxer-18995494.jpg')",
      }}>
        <div className="form-control ">
          <h2 className="text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl">Please SignUp</h2>
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            {...register("name", { required: true })}
            className="input input-bordered"
          />

        </div>

        

        <div className="form-control ">
          
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            {...register("email", { required: true })}
            className="input input-bordered"
          />
            {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
        </div>
        <div className="form-control ">
          
          <label className="label">
            <span className="label-text text-white">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            name="photoURL"
            {...register("photoURL", { required: true })}
            className="input input-bordered"
          />
           {errors.photoUrl && (
                <span className="text-red-600">This field is required</span>
              )}
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="pass"
            {...register("pass", {
              required: true,
              minLength: 6,
              maxLength: 16,

              // todo
              // pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/ ,
              
            })}
            className="input input-bordered"
          />
          {errors.pass?.type === "required" && (
                <p className="text-red-600">First name is required</p>
              )}
               {errors.pass?.type === "minLength" && (
                <p className="text-red-600">Minimum 6 character required</p>
              )}
              {errors.pass?.type === "maxLength" && (
                <p className="text-red-600">
                  maximum character should be under 20
                </p>
              )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            name="Confirmpass"
            {...register("confirmpass", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
            className="input input-bordered"
          />
           {errors.confirmpass?.type === "required" && (
          <p className="text-red-600">Confirm Password is required</p>
        )}
        {errors.confirmpass?.type === "validate" && (
          <p className="text-red-600">{errors.confirmpass.message}</p>
        )}
        </div>

        <div className="form-control flex justify-center items-center">
         <p className="text-xl  bg-slate-50 rounded-xl m-2 px-2 font-semibold text-gray-700"> or SignUp With</p>
          <FcGoogle className="p-2 text-5xl btn  btn-2xl"/>
        </div>
        <div className="form-control ">
          <input className="btn  text-white bg-pink-700 hover:bg-blue-600" type="submit" value="SignUp" />
          <label className="label">
            <Link
              to="/login"
              className="label-text-alt link link-hover text-white"
            >
              Already Have Account? Login
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
