import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const SuggestedCountry = ({sCountry}) => {
    console.log(sCountry)
    
    const {photo, countryName, spotName, visitors, location, _id, shortDescription} = sCountry
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} className="rounded-xl h-64 w-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{countryName}</h2>
        <h2 className="card-title">{spotName}</h2>
        <p>{shortDescription}</p>
        <div className="flex justify-between gap-6 font-semibold">
          <p>Visitors/Year: {visitors}</p>
          <p>{location}</p>
        </div>

        <div className="w-full ">
          <Link to={`/spotDetails/${_id}`}>
            {" "}
            <button className="btn mt-4 md:20 lg:px-24 bg-green-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};
SuggestedCountry.propTypes = {
    sCountry: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      countryName: PropTypes.string.isRequired,
      spotName: PropTypes.string.isRequired,
      visitors: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      location: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
    }).isRequired,
  };
export default SuggestedCountry;