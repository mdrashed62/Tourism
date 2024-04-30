// import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const newSpots = useLoaderData();
  console.log("why", newSpots);
  if (!newSpots) {
    return <div>Loading...</div>;
  }

  const {
    _id,
    spotName,
    countryName,
    shortDescription,
    location,
    averageCost,
    travelTime,
    photo,
    seasonality,
    visitors,
  } = newSpots;

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;

    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const shortDescription = form.shortDescription.value;
    const location = form.location.value;
    const averageCost = form.averageCost.value;
    const travelTime = form.travelTime.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;
    const seasonality = form.seasonality.value;

    const updatedSpot = {
      spotName,
      countryName,
      shortDescription,
      location,
      averageCost,
      travelTime,
      visitors,
      photo,
      seasonality,
    };

    console.log(updatedSpot);

    fetch(`https://tourist-server-one.vercel.app/touristSpots/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Spot Updated Successfully",
            showConfirmButton: true,
          });
        }
      });
    form.reset();
  };

  //  const visitorsNum = Number(visitors);
  return (
    <div className="max-w-2xl mb-6 mx-auto">
      <form onSubmit={handleUpdateSpot}>
        {/* from name and quantity row */}
        <div className="md:flex gap-4 mb-4">
          <div className="md:w-1/2">
            <span className="label-text">Spot Name</span>

            <input
              type="text"
              placeholder="Tourist Spot Name"
              className="input input-bordered w-full"
              name="spotName"
              defaultValue={spotName}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Country Name</span>
            <input
              type="text"
              placeholder="Country Name"
              className="input input-bordered w-full"
              name="countryName"
              defaultValue={countryName}
              id=""
            />
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
              defaultValue={shortDescription}
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
              defaultValue={location}
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
              defaultValue={averageCost}
              id=""
            />
          </div>
          <div className="md:w-1/2">
            <span className="label-text">Travel Time</span>

            <input
              placeholder="Travel Time"
              className="input input-bordered w-full"
              name="travelTime"
              defaultValue={travelTime}
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
              //   defaultValue={isNaN(visitorsNum) ? "" : visitorsNum}
              defaultValue={visitors}
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
              defaultValue={seasonality}
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
              defaultValue={photo}
              id=""
            />
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className="btn btn-block bg-red-500"
        />
      </form>
    </div>
  );
};
// UpdateSpot.propTypes = {
//     newSpots: PropTypes.shape({
//       spotName: PropTypes.string.isRequired,
//       shortDescription: PropTypes.string,
//       location: PropTypes.string,
//       averageCost: PropTypes.string,
//       travelTime: PropTypes.string,
//       visitors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       photo: PropTypes.string,
//       seasonality: PropTypes.string,
//     }).isRequired,
//   }
export default UpdateSpot;
