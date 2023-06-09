import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSignin =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
    const confirmPassword = form.Confirmpass.value;
    const PhotoUrl = form.photoUrl.value;
    console.log(email,password,confirmPassword,PhotoUrl);

    
}

  return (
    <div
      className="hero min-h-screen  "
     
    >
      <form className="card-body     w-2/4  rounded-xl  bg-cover bg-center" onSubmit={handleSignin}  style={{
        backgroundImage:
          "url('https://i.ibb.co/5hdDdk7/vecteezy-chinese-boxing-kung-fu-martial-art-famous-sport-two-boxer-18995494.jpg')",
      }}>
        <div className="form-control ">
          <h2 className="text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl">Please SignUp</h2>
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control ">
          
          <label className="label">
            <span className="label-text text-white">Photo Url</span>
          </label>
          <input
            type="text"
            placeholder="PhotoUrl"
            name="photoUrl"
            className="input input-bordered"
          />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="pass"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            name="Confirmpass"
            className="input input-bordered"
          />
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

export default SignIn;
