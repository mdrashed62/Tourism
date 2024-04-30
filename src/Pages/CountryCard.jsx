import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { photo, countryName, shortDescription } = country;

  
  return (
    <Link className="max-w-6xl mx-auto pl-14 lg:pl-2" to={`/countryCard/${countryName}`}>
      <div className="card h-full bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{countryName}</h2>
          <p>{shortDescription}</p>
        </div>
      </div>
    </Link>
  );
};
CountryCard.propTypes = {
  country: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};
export default CountryCard;
