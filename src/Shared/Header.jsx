import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import useSelectedClass from "../Hooks/useSelectedClass";

const Header = () => {

  const {user,logOut}= useAuth();
  console.log(user);
  const {sClass}= useSelectedClass();
  console.log(sClass);
  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
    return (
        <div>
            <div className="navbar bg-blue-900 bg-opacity-75 fixed z-10 max-w-screen-xl" >
  <div className="navbar-start">
    <div className="dropdown" >
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold " >
      <li ><NavLink to='/' >Home</NavLink></li>
     
     <li><NavLink to='/instructors'>Instructors</NavLink></li>
     <li><NavLink to='/Allclasses'>Classes</NavLink></li>
     <li><NavLink to='/dashboard/DashHome' >Dashboard</NavLink></li>
      </ul>
    </div>
    <a className="font-bold text-xl text-pink-600">InfinityMarttialArts</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold text-white ">
    <li><NavLink to='/'>Home</NavLink></li>
     
     <li><NavLink to='/instructors'>Instructors</NavLink></li>
     <li><NavLink to='/Allclasses'>Classes</NavLink></li>
     <li><NavLink to='/dashboard/adminhome' >DashBoard  </NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  {user ? (
  <div className="flex justify-center items-center">
    
  {user.photoURL &&
   (<div className="indicator">
   <span className="indicator-item badge badge-secondary">{sClass?.length}</span> 
   <div className="avatar">
   <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src= {user.photoURL} alt="" />
   </div>
 </div>
 </div> )
  }
<button onClick={handleLogOut} className="p-2 rounded-2xl text-2xl text-white bg-pink-700 mx-4"><FiLogOut/></button> 
  </div>
) : (
  <Link to='/login' className="btn btn-outline text-white bg-pink-700">Login</Link>
)}
  </div>
</div>
        </div>
    );
};

export default Header;