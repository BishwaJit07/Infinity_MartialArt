import { FaClipboardCheck, FaHome } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
 <Outlet/>
  </div> 

  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-gray-300 text-base-content">
      {/* Sidebar content here */}
      <li><Link to='userhome' className='text-xl font-semibold'><AiOutlineUsergroupDelete/>User</Link></li>
      <li><Link to='myclass' className='text-xl font-semibold'> <GiClassicalKnowledge/>My Selected Classes</Link></li>
      <li><Link to='enrollclass' className='text-xl font-semibold'> <TiTick/>Enroll Classes</Link></li>

      <div className="divider"></div> 

         <li><Link to='/' className='text-xl font-semibold'><FaHome/> Home</Link></li>
         <li><Link to='/Allclasses' className='text-xl font-semibold'><FaClipboardCheck/>All Classes</Link></li>
         
    </ul>
  
  </div>
</div>
    );
};

export default DashBoard;