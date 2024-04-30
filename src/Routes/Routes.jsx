import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot";
import MyList from "../Pages/MyList";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import SpotDetails from "../Pages/SpotDetails";
import UpdateSpot from "../Pages/UpdateSpot";
import CountriesCard from "../Pages/CountriesCard";
// import CountryCard from "../Pages/CountryCard";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allTouristSpot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/addTouristSpot",
        element:   <PrivateRoute><AddTouristSpot></AddTouristSpot> </PrivateRoute>
      },
      {
        path: "/myList",
        element:  <PrivateRoute> <MyList></MyList> </PrivateRoute>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/spotDetails/:id",
        element: <SpotDetails></SpotDetails>,
        loader: () => fetch("http://localhost:5000/touristSpots"),
      },
      {
        path: "/updateSpot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/touristSpots/${params.id}`)
      },
      {
        path: '/countryCard/:specifyCountry',
        element: <CountriesCard></CountriesCard>,
        loader: ({params}) => fetch(`http://localhost:5000/touristSpots/${params.specifyCountry}`)
      },

     
    ],
  },
]);

export default routes;
