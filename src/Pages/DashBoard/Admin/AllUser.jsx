import { useQuery } from "@tanstack/react-query";
import { RiAdminLine } from "react-icons/ri";
import { MdSportsMartialArts } from "react-icons/md";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://infinitymarttialarts.vercel.app/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`https://infinitymarttialarts.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            title: "Sweet!",
            text: `${user.name} is Now Admin`,
            imageUrl:
              "https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
  };
  const handleInstructor = (user) => {
    fetch(`https://infinitymarttialarts.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();

          Swal.fire({
            title: "Success!",
            text: `${user.name} is Now Instructor`,
            imageUrl:
             "https://i.ibb.co/D4DzjgW/k5ubteyd.png",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-gray-200 my-4">
          {/* head */}
          <thead>
            <tr>
              <th>
                
              </th>
              <th>Instructors</th>

              <th>Make Admin</th>
              <th>Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.isArray(users) &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    {user.role === "admin" ? (
                      <button className="btn bg-red-600 rounded-full" disabled>
                        <RiAdminLine className="text-white font-extrabold text-2xl" />
                      </button>
                    ) : (
                      <button
                        className="btn bg-red-600 rounded-full"
                        onClick={() => handleAdmin(user)}
                      >
                        <RiAdminLine className="text-white font-extrabold text-2xl" />
                      </button>
                    )}
                  </td>

                  <th>
                    {user?.role1 === "instructor" ? (
                      <button className="btn bg-blue-500 rounded-full" disabled>
                        <MdSportsMartialArts className="text-white font-extrabold text-2xl " />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleInstructor(user)}
                        className="btn bg-blue-500 rounded-full"
                      >
                        <MdSportsMartialArts className="text-white font-extrabold text-2xl " />
                      </button>
                    )}
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
