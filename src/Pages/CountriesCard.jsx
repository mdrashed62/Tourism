import {useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import SuggestedCountry from "./SuggestedCountry";

const CountriesCard = () => {
  const newCountry = useLoaderData();
  const { countryName } = newCountry; 
  console.log(newCountry)

  const [data, setData] = useState([]);
    console.log(data)

  useEffect(() => {
    fetch(`https://tourist-server-one.vercel.app/country/${countryName}`)
      .then((res) => res.json()).then((data) => setData(data));
      
     
  }, []);
  console.log(data)
 

  return (
    <div>
        {
             data.map(sCountry => <SuggestedCountry key={sCountry._id} sCountry={sCountry}></SuggestedCountry>)
        }
    </div>
  );
};

export default CountriesCard;
