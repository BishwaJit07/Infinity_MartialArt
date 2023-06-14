
import { FcGoogle } from 'react-icons/fc';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
const GoogleLogin = () => {

const {googleSignIn}= useAuth();
const navigate= useNavigate();

    const location = useLocation();
      
    const from = location.state?.from?.pathname || '/'

    const googleLogIn = ()=>{
        googleSignIn()
        .then(result=>{
          const loggedUser= result.user;
          console.log('loggedUser',loggedUser);
          const saveUser = {
            name: loggedUser.displayName,
            email: loggedUser.email,
            photoURL: loggedUser.photoURL,
            role:'student'
          } 
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
          "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then(() => {
            {
                navigate(from,{replace:true});
              }
            });
        })
         
        

 }
    return (
        <div className="form-control flex justify-center items-center">
        <p className="text-xl  bg-slate-50 rounded-xl my-2 px-2 font-semibold text-gray-700"> or Login With</p>
         <FcGoogle className="p-2 text-5xl btn  btn-2xl" onClick={googleLogIn}/>
       </div>
    );
};

export default GoogleLogin;