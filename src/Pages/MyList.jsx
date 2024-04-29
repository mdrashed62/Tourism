import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MyList = () => {
    const {user} = useContext(AuthContext);
    // console.log('auth user', user.email);
  const listData = useLoaderData();
 

  const spots = listData?.filter((spot) => spot.userEmail === user?.email);

  const handleDelete = (id) =>{
    console.log(id)
  }

  const handleUpdate = () => {

  }

  return (
    <div>
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
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleUpdate(spot.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDelete(spot.spotName)}
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
