import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
  const spotDetails = useLoaderData();
  const { id } = useParams();

  const spot = spotDetails.find((spot) => spot._id === id);

  if (!spot) {
    return (
      <div>
        <h3>Spot Not Found</h3>
        <p>The spot with ID {id} could not be found.</p>
      </div>
    );
  }

  const { spotName, countryName, shortDescription, location, averageCost, travelTime, visitors, userName, photo, email, seasonality } = spot;

  return (
     <div className="flex flex-col lg:flex-row px-4 mb-6 lg:px-10">
      <div className="flex-1 flex justify-center">
        <img className="w-96 rounded-lg" src={photo} alt="" />
      </div>
      <div className="flex-1">
      

        <div className="border-b-2 text-center lg:text-start">
        <div className="flex items-center gap-6">
        <h3 className="text-3xl font-semibold">{spotName}</h3>
        <h3 className="text-4xl font-semibold">{countryName}</h3>
      
        </div>
          <p className="text-xl mt-2 mb-4 font-semibold">{shortDescription}</p>
        </div>
        <div className="border-b-2 mt-2 text-center font-semibold lg:text-start">
          <p className="mb-2">{userName}</p>
          <p className="mb-2">{email}</p>
        </div>

        <p className="flex items-center gap-4">
          <span className="text-xl font-semibold text-center lg:text-start">Visitors Per Year: </span>
          <p>{visitors}</p>
        </p>
      
       
        <hr />
       
        <div className="flex gap-10 mb-3">
          <div>
            <p>Travel Time:</p>
            <p>Location:</p>
            <p>Seasonality:</p>
            <p>Average Cost:</p>
          </div>

          <div className="font-bold">
            <p>{travelTime}</p>
            <p>{location}</p>
            <p>{seasonality}</p>
            <p>{averageCost}</p>
          </div>
        
        </div>
      
      </div>
    
    </div>
  );
};

export default SpotDetails;
