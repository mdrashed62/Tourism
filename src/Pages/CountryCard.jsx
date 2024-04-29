import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
  const { photo, countryName, shortDescription } = country;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{countryName}</h2>
        <p>{shortDescription}</p>
        
      </div>
    </div>
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
