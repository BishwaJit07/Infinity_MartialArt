import { FaClipboardCheck, FaHome } from "react-icons/fa";
import { GiClassicalKnowledge } from "react-icons/gi";
import { AiOutlineUsergroupAdd, AiOutlineUsergroupDelete } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseInstructor from "../Hooks/UseInstructor";
import { MdClass } from "react-icons/md";
import { FiHome } from "react-icons/fi";

const DashBoard = () => {

  // const isAdmin = false;

  const [isAdmin] = UseAdmin();
const [isInstructor]= UseInstructor();

console.log('isInstructor',isInstructor);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-300 text-base-content">
          <img src='https://i.ibb.co/NNL4RpY/Screenshot-50-removebg-preview.png' alt="" className="mb-4" />
          {/* Sidebar content here */}


 {/* Admin and Instructor */}
 {isAdmin && isInstructor && (
          <>
            <li>
              <Link to="dashhome" className="text-xl font-semibold">
                <FaHome />
                Admin
              </Link>
            </li>
            <li>
              <Link to="alluser" className="text-xl font-semibold">
                <AiOutlineUsergroupAdd />
                ManageUser
              </Link>
            </li>
            <li>
              <Link to="manageclasses" className="text-xl font-semibold">
                <MdClass />
                ManageClasses
              </Link>
            </li>

            <div className="divider"></div>


            <li>
              <Link to="instructorhome" className="text-xl font-semibold">
                <FiHome />
                Instructor Home
              </Link>
            </li>
            <li>
              <Link to="addclasses" className="text-xl font-semibold">
                <MdClass />
                Add a Class
              </Link>
            </li>
            <li>
              <Link to="myclasses" className="text-xl font-semibold">
                <MdClass />
                My Classes
              </Link>
            </li>

          </>
        )}

        {/* Admin Only */}
        {isAdmin && !isInstructor && (
          <>
            <li>
              <Link to="adminhome" className="text-xl font-semibold">
                <FaHome />
                Admin
              </Link>
            </li>
            <li>
              <Link to="alluser" className="text-xl font-semibold">
                <AiOutlineUsergroupAdd />
                ManageUser
              </Link>
            </li>
            <li>
              <Link to="manageclasses" className="text-xl font-semibold">
                <MdClass />
                ManageClasses
              </Link>
            </li>


          </>
        )}

        {/* Instructor Only */}
        {!isAdmin && isInstructor && (
          <>
            <li>
              <Link to="instructorhome" className="text-xl font-semibold">
                <FiHome />
                Instructor Home
              </Link>
            </li>
            <li>
              <Link to="addclasses" className="text-xl font-semibold">
                <MdClass />
                Add a Class
              </Link>
            </li>
            <li>
              <Link to="myclasses" className="text-xl font-semibold">
                <MdClass />
                My Classes
              </Link>
            </li>
          
          </>
        )}

        {/* None of them */}
        {!isAdmin && !isInstructor && (
          <>
            <li>
                <Link to="userhome" className="text-xl font-semibold">
                  <AiOutlineUsergroupDelete />
                  User
                </Link>
              </li>
              <li>
                <Link to="myclass" className="text-xl font-semibold">
                  {" "}
                  <GiClassicalKnowledge />
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="enrollclass" className="text-xl font-semibold">
                  {" "}
                  <TiTick />
                  Enroll Classes
                </Link>
              </li>
          </>
        )}



          {/* admin content  */}

          
          {/* {isAdmin ? (
            <>
              <li>
                <Link to="adminhome" className="text-xl font-semibold">
                  <FaHome />
                  Admin
                </Link>
              </li>
              <li>
                <Link to="alluser" className="text-xl font-semibold">
                  <AiOutlineUsergroupAdd />
                  ManageUser
                </Link>
              </li>
              <li>
                <Link to="manageclasses" className="text-xl font-semibold">
                  <MdClass />
                  ManageClasses
                </Link>
              </li>

            </>
          ) : (
            <>
              <li>
                <Link to="userhome" className="text-xl font-semibold">
                  <AiOutlineUsergroupDelete />
                  User
                </Link>
              </li>
              <li>
                <Link to="myclass" className="text-xl font-semibold">
                  {" "}
                  <GiClassicalKnowledge />
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="enrollclass" className="text-xl font-semibold">
                  {" "}
                  <TiTick />
                  Enroll Classes
                </Link>
              </li>
            </>
          )} */}

          <div className="divider"></div>

          <li>
            <Link to="/" className="text-xl font-semibold">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/Allclasses" className="text-xl font-semibold">
              <FaClipboardCheck />
              All Classes
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
