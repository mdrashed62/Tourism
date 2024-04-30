import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const CountriesCard = () => {
  const newCountry = useLoaderData();
  const [data, setData] = useState([]);
  console.log("for new", data);

  const { _id, photo, spotName, visitors, countryName, shortDescription } =
    newCountry;

  useEffect(() => {
    fetch(`https://tourist-server-one.vercel.app/country`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
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
  );
};

export default CountriesCard;
