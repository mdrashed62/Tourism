import { useLoaderData } from "react-router-dom";
import AllCards from "./AllCards";


const AllTouristSpot = () => {
    const allTouristSpot = useLoaderData()
    return (
        <div>
            <h2 className="text-5xl text-center font-bold">All Tourist Spot Here</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           {
                allTouristSpot.map(touristSpot => <AllCards key={touristSpot._id} touristSpot={touristSpot}></AllCards>)
            }
           </div>
        </div>
    );
};

export default AllTouristSpot;