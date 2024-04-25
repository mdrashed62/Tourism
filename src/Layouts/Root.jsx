import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;