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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://tourist-server-ashy.vercel.app/touristSpots"),
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
        loader: () =>
          fetch("https://tourist-server-ashy.vercel.app/touristSpots"),
      },
      {
        path: "/addTouristSpot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch('https://tourist-server-ashy.vercel.app/touristSpots')
      },
      {
        path: "/spotDetails/:id",
        element: <SpotDetails></SpotDetails>,
        loader: () =>
          fetch("https://tourist-server-ashy.vercel.app/touristSpots"),
      },
    ],
  },
]);

export default routes;
