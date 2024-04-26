import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot";
import MyList from "../Pages/MyList";
import PrivateRoute from "../Components/PrivateRoute";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
           {
            path: '/allTouristSpot',
            element: <AllTouristSpot></AllTouristSpot>
           },
           {
            path: '/addTouristSpot',
            element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
           },
           {
            path: '/myList',
            element: <PrivateRoute><MyList></MyList></PrivateRoute>
           },

        ]
    }
])

export default routes;