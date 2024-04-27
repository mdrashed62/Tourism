import PropTypes from "prop-types";

const SpotCards = ({ spot }) => {
  console.log(spot);
  const {
    spotName,
    shortDescription,
    location,
    visitors,
    photo,
  } = spot;

  const shortDescText = shortDescription
    ? shortDescription.slice(0, 68)
    : "Description not available";
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} className="rounded-xl h-64 w-72" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{spotName}</h2>
        <p>{shortDescText}</p>
        <div className="flex justify-between gap-6 font-semibold">
          <p>Visitors/Year: {visitors}</p>
          <p>{location}</p>
        </div>

        <button className="btn w-full mt-4 bg-green-500">View Details</button>
      </div>
    </div>
  );
};

SpotCards.propTypes = {
  spot: PropTypes.shape({
    spotName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    location: PropTypes.string.isRequired,
    visitors: PropTypes.number,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};
export default SpotCards;
