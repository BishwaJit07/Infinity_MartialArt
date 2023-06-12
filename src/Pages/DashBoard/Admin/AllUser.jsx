import { useQuery } from "@tanstack/react-query";
import { RiAdminLine } from "react-icons/ri";
import { MdSportsMartialArts } from "react-icons/md";
import Swal from "sweetalert2";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAACAgIDi4uL4+Pjs7Oz7+/uDg4O1tbXd3d3Jycnw8PCHh4f19fXT09Pn5+dwcHAQEBCQkJClpaXR0dHLy8tjY2PAwMBDQ0NMTEyioqIsLCybm5t4eHg0NDRISEgfHx9aWlpoaGg7Ozutra0nJycXFxdcXFwjIyOWlpbCy4rBAAAJX0lEQVR4nO1daWOqOhCVoojivuGGFWu3//8H3wWtBiTLhEkm+jif7m2r5giZzHJmaLUaNGjQoEGDBg0aNOAgCJPN0fN+Nt24Tb0WExgmHoPViHo96Ai9ElYvdh27ZYL/0KdeFCaqCHpeSL0sPPQrCXpeTL0wNOw4DL0O9cqQwLuEnvdOvTQkTLgMX+U+nfIZHqjXhoIOn6Dn9ahXh4GeiOGZenUYGIkYdqlXhwFfxHBCvToMCPfhS1zD1svvw9ZawPAlbGnrl09wSr02HAiMaUK9NiQcuQx/qZeGhBmX4Z56aUjgezUz6qVhgXubnqhXhoU37kWkXhkWHjJtN7x6lD8ZU68MC9sX34XhgXMJXyXxPeRuwldJe3MTUa+RpGm1V9xL+BpO6ZzL7yW24VDEzxtQL6824pOI37NHFVHI337PfwmD/oB3ABawoV6oFob9mSgrU8RnHD3XiRgsu0rXroDjbpP89p+CaPwNZsdgtaBevxRCu6nEMaKmIET7oy5Bz+1aYvSFQNDl80NYmIBg+jsKqMlUQVgf1CL6noQuWVdheVAfk/Ni1PNvGNNRNkSwAiuaOxj9FhVgOgsX1s8UmwSv+JhsY3/4wgSvmKbdebwYt4PA6L0rrNBbw9f6bWTIEKGdg3g4rGaIVeWImg4HaE48Pw1KDKxMevuTmgkP30gMMaIJM0ASIW2oefCBUzmXZtIIgaKQr1am28Vx093Go39eXHtf/AWGv8MpB1rD9yzssQ5qxO4ZjCTlmYza12Y2H1W5L8ySEHoc7MVLJUwELmh7cP2jY32CYyqCElXD8MIRQRnAbZ4wjbV0afFgi2BmEvlSDMGSFJUuIrQlLuKrmwygUAaxJfKz5Y7uknmWO43Tvx98WSJo3h/9WCXb2L+fedH+YtqsFf0HkgXqot/zOzw7ON4miT09eGyGoEP14LYZhi7VnVIjDKlZsRBKZHSxombFwsiRv6VmVYAJhm41rqurSdThllTYxIlordCiBBMnolu1bQPJ/E9qTiXAhU8yyGNbu8DfiCk1pRKW6AzfqCmVgc7QuQ42wRQIPTg3xoU/yUMT7jUDPyzxsF8Imn2lcEkAdUEpHZUH4DVKwg62Oxfii9k1FT3UzqS6OHXg6n3v0l9WFjCcv2sxdG8bXi5i0qvwJsca7oBDORoG7T4v4OG3i/KwtLry+gDLiD6oVwyGYGbSS1xCsNjNNa9bBREo8/+czdyh+p3qVpYNAH8vJ5cBS6FlDVvPv/1bhaNrwb0UWVh1p9iR7sedWxkoKaJL9ZTxwSTKoo8nI7j4W3iv4mdVeLaxkMz1Ysq1Pr8j6tmMTCGzEfJ+weDJOp2jUg6VTZ5V5jxEAi4X8Vhx+2SFBY9jopxLH0pQqVU8Me5YVIoancseSsALehMmhAz291FRqc9/Lych6HA+sfmJ0SDLcawXbtUK5eiImxLWxWRvdL11w/X0WcZ6KgSDs4qGukwI72KG7RFqatrkocSbJ3OeIjJUVdM+CIKyH84pVgyEuvKk3Iie1wAm55HrZgegrSlNTLrXANaY7XTogJT0/2ZABpftx06Z2Lklp2EBku1fbshgczkmioXk1C25yR2gWkyYzebJXNQLm9Jv3ZxtAkvgj/7S4RerU+4NczHpBkz93kPF/NUPGQ73higCtbRpK/j7Z346Pio6dq4dHUAF3/kuF8ujwyor5ZZiASrI6NybFnfZ64OqP3LJHVfMad+wZls18neo/jtnKlFgXdSWvWj5huPUNhzJ4MA79DqsA5T7aVwBoAsPEwj4Q9Y5OBSc2DxNxVc1fNAPxUyhBLPsKKO8XcrehDqVwx8iz8Wy4AHlnrZ4wtuEMj7WkUFHBYb5kS87buhSjloNF63Hayh123+IAkct/dqxyHChxJDKqmq1WP4UGfYUGZJk//W6ZI+twvbtKb+T/YYozb6ujCHjBvnq35VtT1V3nELGkLFQY3WGliNj7WaSjCEjeIsADO32RGkPTvoqfj0BhKHN+zTVJZjrnJmcQAvC0GL2v04TQvb6Y+F/6gytPW2n1jSFTI1/O0l3wPezRLBeG0lmW26l1A2QoZX0Ta/mtIhsL92q4RMgQ+MqYj9UmyIvQmbyb97CG5ChYTF/iDJbL4vah8s43mY3+wzK0OijPmo0+8wYFQqTl+glIZShybYh/W7K3/bNeh7OVfkzCENzYZTuCTG9eJO5NHHCyStB3tvYM3c0R+v93L7y07ry8oEZmrI1egQ/FOeUgIqPZkJhLSOzUs51RqDpkiYI6gS7M5CXDEnaGRhgo0EQLpBRr+/gN7jBpz9qiX47yrcq9jB28PzOL11rN1LsIUJOEIONzLqG19FX8gt3eOxaGsdEzQY0pS2BeSSCn4pTv8NO4abBU2sG4LF6GHYukkfYCJ9y+SjwU3GQDLk0yEZSv8FzvngRuOSZWDhpRfgxiOn2Sz4K4yPgYxEOmNIJyfdbX4nSho9EQG6RFH9Y7QDDh/aZ4/efiWPGukNaNcrz6I8Rk9i5egoNDYGFgUyt+Daqpe6HP+zg3UTFRGzqamyKITzlaybVLtkq2u8LtzGJoQymRJarKwcD25hvc6Isseum2VoLzVdsTJYRxClovfZvYDC4Mds3IJmUprM5YMHgwXRfhERypfHxsGDQQq1SvBHB2Zoh6GEVVjoixJ4HNJsQgU4JO70CEgU57M2GIIK2GszEq4CdUyDxgTXtdSpcBuhGAiVF7bUIio9nSDgDuoIWtazihjFAyA1y1awqWcXJPvX3gbT12B3nJHbc1GM2yC60+xBecaCvbhAADG03IgsPMXWLoC4UsKYN/IPwNlU3pqkqQfvznITWVDnzXdngWIUfk1w4EHnLyl+4atg7peiUF1WglasIqno8ku5j4ZRXRb2HYovkgWjWgbi8kKoYdzWPhmwqnmwPHeQOuFIVjW4GgPwWm+4lKRuV855yzNFhc3qTndgTYbWtlGALK9I15GP/FPrFV/MRz6Ms1QdGrV6ZI/18A1Wva1OpeSvlELMUlj9jD1oHOv9TRYbV9qL06mt41O7/nta7f47v1IWxeMrlsEpXdVlKSxYMU+DGWANVbR1PsrsszCZxcVJTlet8WO3n5zA8b/eDbrc7m5+58/0zLBiOTk6j9FnDMH1/2/fBLtbi5h2RHw3V6PiLOIzjRW+s7T6O0gtD+rPBHPJDYuOGbWnQoEGDBg0aNGjwv8J/2od/10RTI60AAAAASUVORK5CYII=",
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
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>

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
