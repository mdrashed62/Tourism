import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllCards = ({touristSpot}) => {
   
    const { spotName, shortDescription, location, averageCost, travelTime, visitors, photo, seasonality, _id } = touristSpot;

    const visitorsNum = Number(visitors);
    return (
        <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} className="rounded-xl h-64 w-72" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{spotName}</h2>
        <p className="text-small font-semibold">For: {seasonality}</p>
        <p>{shortDescription}</p>
        <div className="flex gap-6 font-semibold">
          <div className="flex w-full justify-around">
          <p>
              Visitors/Year: {isNaN(visitorsNum) ? "Unknown" : visitorsNum} 
              
            </p>
          <p>{location}</p>
          </div>
         
        </div>
        <div className="flex font-semibold justify-around">
          <p>Travel Time: {travelTime}</p>
          <p>Cost: {averageCost}</p>
          </div>

       <Link to={`/spotDetails/${_id}`}> <button className="btn w-full mt-4 bg-blue-500">View Details</button></Link>
      </div>
    </div>
    );
};
AllCards.propTypes = {
    touristSpot: PropTypes.shape({
      spotName: PropTypes.string.isRequired,
      shortDescription: PropTypes.string, 
      location: PropTypes.string.isRequired,
      visitors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      photo: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      averageCost: PropTypes.string.isRequired,
      seasonality: PropTypes.string.isRequired,
      travelTime: PropTypes.string.isRequired,
    }).isRequired,
  };
export default AllCards;