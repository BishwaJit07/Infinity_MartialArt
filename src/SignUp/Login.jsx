
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
  const navigate= useNavigate();
    const location = useLocation();
      
    const from = location.state?.from?.pathname || '/'
    const {logIn,googleSignIn}= useAuth();

    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email,password);

        logIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);

          navigate(from,{replace:true});
        })
    }
    
    const googleLogIn = ()=>{
           googleSignIn()
           .then(result=>{
             const loggedUser= result.user;
             console.log(loggedUser);
             navigate(from,{replace:true});
           })
    }



    return (
        <div >
            <div className="hero min-h-screen ">

         
         <form onSubmit={handleLogin} className="card-body  bg-cover bg-center w-2/4"  style={{ backgroundImage: "url('https://i.ibb.co/5hdDdk7/vecteezy-chinese-boxing-kung-fu-martial-art-famous-sport-two-boxer-18995494.jpg')" }}>
              <div className="form-control ">
              <h2 className='text-2xl font-semibold text-white text-center bg-blue-600 rounded-b-xl'>Please LOGIN</h2>
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
         <p className="text-xl  bg-slate-50 rounded-xl my-2 px-2 font-semibold text-gray-700"> or Login With</p>
          <FcGoogle className="p-2 text-5xl btn  btn-2xl" onClick={googleLogIn}/>
        </div>
              <div className="form-control ">
              <input className="btn  text-white bg-pink-700 hover:bg-blue-600" type="submit" value="Login" />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover text-white">Don't Have Account? SignUp</Link>
                </label>
              </div>
            </form>
          
        


         </div>
    
 
</div>
       
    );
};

export default Login;