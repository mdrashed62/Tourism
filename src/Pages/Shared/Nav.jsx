import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="ml-2">
        <NavLink to="/allTouristSpot">All Tourist Spots</NavLink>
      </li>

      <li className="mr-2 ml-2">
        <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
      </li>

      <li className="mr-2 ml-2">
        <NavLink to="/myList">My List</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mb-6 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost  text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-500">
          Destination Fusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex">
        <label className="flex cursor-pointer mr-4 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <label className="mr-5">
          {user && (
            <div
              className="tooltip  tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
            </div>
          )}
        </label>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white "
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
