import { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log('auth user', user.email); important line
  const listData = useLoaderData();
  const [listSpot, setListSpot] = useState(listData);

  const spots = listData?.filter((spot) => spot.userEmail === user?.email);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourist-server-one.vercel.app/touristSpots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              const remaining = listSpot.filter((aSpot) => aSpot._id !== id);
              setListSpot(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = () => {
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto ml-7 lg:ml-0">
      <table className="table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Spot Name</th>
            <th>Country Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {spots?.map((spot, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={spot.photo} alt={`Photo of ${spot.name}`} />
                    </div>
                  </div>
                </div>
              </td>
              <td>{spot.spotName}</td>
              <td>{spot.countryName}</td>
              <td>
                <Link to={`/updateSpot/${spot._id}`}>
                  <button
                    onClick={handleUpdate()}
                    className="btn btn-ghost btn-xs"
                  >
                    Update
                  </button>
                </Link>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDelete(spot._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
