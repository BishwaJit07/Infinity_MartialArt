
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email,password);
    }

    return (
        <div >
            <div className="hero min-h-screen ">

         
         <form onSubmit={handleLogin} className="card-body  bg-cover bg-center w-96 h-96"  style={{ backgroundImage: "url('https://i.ibb.co/5hdDdk7/vecteezy-chinese-boxing-kung-fu-martial-art-famous-sport-two-boxer-18995494.jpg')" }}>
              <div className="form-control ">
              <h2 className='text-2xl font-semibold text-white'>Please LOGIN</h2>
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
                  <Link to="/signup" className="label-text-alt link link-hover text-white">Don't Have Account? SignUp</Link>
                </label>
              </div>
            </form>
          
        


         </div>
    
 
</div>
       
    );
};

export default Login;