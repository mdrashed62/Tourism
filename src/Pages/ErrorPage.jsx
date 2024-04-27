import { Link } from "react-router-dom";
import myImage from '../assets/8632.jpg';

const ErrorPage = () => {
    return (
        <div className="text-red-500">
            <h3 className="text-3xl text-center lg:text-8xl font-bold">Opps!</h3>
            <img className="w-[500px] mx-auto" src={myImage} alt="" />
           <div className="flex justify-center">
           <Link to="/"><button className="btn btn-outline lg:w-[400px] btn-secondary">Go to Home page</button></Link>
           </div>
        </div>
       
    );
};

export default ErrorPage;