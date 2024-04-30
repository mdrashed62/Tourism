import  { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCards from './AllCards';
import { FaCaretDown } from "react-icons/fa";

const AllTouristSpot = () => {
  const allTouristSpot = useLoaderData(); 
  const [sortOrder, setSortOrder] = useState('asc'); 

  const sortByAverageCost = (a, b) => {
    const costA = parseFloat(a.averageCost);
    const costB = parseFloat(b.averageCost);

    if (sortOrder === 'asc') {
      return costA - costB; 
    } else {
      return costB - costA; 
    }
  };

  const sortedTouristSpots = [...allTouristSpot].sort(sortByAverageCost); 

  return (
    <div className='mb-6'>
      <h2 className="text-5xl text-center font-bold">All Tourist Spots</h2>

    
      <div className="text-center mt-4 ">
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn bg-emerald-400 m-1">
            Average Cost <FaCaretDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
          
            <li>
              <a onClick={() => setSortOrder('asc')}>High Cost</a> 
            </li>
            <li>
              <a onClick={() => setSortOrder('desc')}>Low Cost</a> 
            </li>
          </ul>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortedTouristSpots.map((touristSpot) => (
          <AllCards key={touristSpot._id} touristSpot={touristSpot} />
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpot;
