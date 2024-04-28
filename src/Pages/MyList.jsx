import { useLoaderData } from "react-router-dom";


const MyList = () => {
    const addSpotData = useLoaderData()
    console.log(addSpotData)
    return (
        <div>
            <h2>My List</h2>
        </div>
    );
};

export default MyList;