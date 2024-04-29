import { useContext } from "react";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { AuthContext } from "../Providers/AuthProvider";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  console.log("auth user", user.email);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const shortDescription = form.shortDescription.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const visitors = form.visitors.value;
    const userName = form.userName.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const seasonality = form.seasonality.value;
    const userEmail = user?.email;

    const addSpot = {
      spotName,
      countryName,
      shortDescription,
      location,
      averageCost,
      travelTime,
      visitors,
      userName,
      photo,
      email,
      seasonality,
      userEmail,
    };

    console.log(addSpot);

    fetch("https://tourist-server-ashy.vercel.app/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your tourist spot has been added",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
    form.reset();
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-300 mt-6 p-20 rounded-lg">
      <h3 className="text-4xl font-bold text-center mb-6">Add Tourist Spot</h3>
      <form onSubmit={handleAddSpot}>
        {/* from name and quantity row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Spot Name</span>

            <input
              type="text"
              placeholder="Tourist Spot Name"
              className="input input-bordered w-full"
              name="spotName"
              // defaultValue={spotName}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Country Name</span>
            <select className="input input-bordered w-full" name="countryName">
              <option value="">Select a Country</option>
              <option value="USA">Bangladesh</option>
              <option value="Canada">Thailand</option>
              <option value="Mexico">Indonesia</option>
              <option value="UK">Malaysia</option>
              <option value="France">Vietnam</option>
              <option value="Germany">Cambodia</option>
            </select>
          </div>
        </div>
        {/* from supplier row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Short Description</span>

            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered w-full"
              name="shortDescription"
              // defaultValue={}
              id=""
            />
          </div>
          <div className=" md:w-1/2">
            <span className="label-text">Location</span>

            <input
              type="text"
              placeholder="location"
              className="input input-bordered w-full"
              name="location"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        {/* from category and details row */}
        <div className="md:flex gap-4  mb-4">
          <div className="form-control md:w-1/2">
            <span className="label-text">Average Cost</span>

            <input
              placeholder="Average Cost"
              className="input input-bordered w-full"
              name="averageCost"
              // defaultValue={}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Travel Time</span>

            <input
              placeholder="Travel Time"
              className="input input-bordered w-full"
              name="travelTime"
              // defaultValue={}
              id=""
            />
          </div>
        </div>
        <div className="md:flex gap-4  mb-4">
          <div className="form-control md:w-1/2">
            <span className="label-text">Total Visitors Per Year</span>

            <input
              type="text"
              placeholder="Visitors Per Year"
              className="input input-bordered w-full"
              name="visitors"
              // defaultValue={}
              id=""
            />
          </div>

          <div className="md:w-1/2">
            <span className="label-text">Seasonality</span>

            <input
              type="text"
              placeholder="seasonality"
              className="input input-bordered w-full"
              name="seasonality"
              // defaultValue={}
              id=""
            />
          </div>
        </div>

        {/* from supplier row */}
        <div className="md:flex gap-4 mb-4">
          <div className=" md:w-1/2">
            <span className="label-text">User Name</span>

            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered w-full"
              name="userName"
              // defaultValue={}
              id=""
            />
          </div>

          <div className="md:w-1/2">
            <span className="label-text">User Email</span>

            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered w-full"
              name="email"
              // defaultValue={}
              id=""
            />
          </div>
        </div>

        {/* from photo url row */}
        <div className=" mb-4">
          <div className=" w-full">
            <span className="label-text">Photo Url</span>

            <input
              type="text"
              placeholder="Photo Url"
              className="input input-bordered w-full"
              name="photo"
              // defaultValue={}
              id=""
            />
          </div>
        </div>

        <input
          type="submit"
          value="Add Spot"
          className="btn btn-block bg-green-500"
        />
      </form>
    </div>
  );
};

export default AddTouristSpot;
