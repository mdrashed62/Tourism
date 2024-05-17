import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import logo from '../../assets/logo.jpeg';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Theme state and handler
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSignOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch();
  };

  const navLinks = (
    <ul className="flex flex-col lg:flex-row lg:items-center">
      <li className="m-2">
        <NavLink to="/">
          <span id="home">Home</span>
          <Tooltip
            className="index"
            anchorSelect="#home"
            content="Home"
          />
        </NavLink>
      </li>

      <li className="m-2">
        <NavLink to="/allTouristSpot">
          <span id="allSpots">All Tourist Spots</span>
          <Tooltip
            className="index"
            anchorSelect="#allSpots"
            content="All Tourist Spots"
          />
        </NavLink>
      </li>

      <li className="m-2">
        <NavLink to="/addTouristSpot">
          <span id="addSpots">Add Tourist Spots</span>
          <Tooltip
            className="index"
            anchorSelect="#addSpots"
            content="Add Tourist Spots"
          />
        </NavLink>
      </li>

      <li className="m-2">
        <NavLink to="/myList">
          <span id="myList">My List</span>
          <Tooltip
            className="index"
            anchorSelect="#myList"
            content="My List"
          />
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-base-100 lg:pl-2 mb-6">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
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
            className="dropdown-content menu menu-sm mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>

        <div className="flex items-center text-xl md:text-2xl lg:text-3xl rounded-lg font-semibold">
          <div className="w-12 h-12">
            <img src={logo} alt="Logo" />
          </div>
          <p className="text-violet-600">Destination Fusion</p>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end flex items-center">
        {user ? (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="flex items-center cursor-pointer">
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full"
                alt="User Profile"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>{user?.displayName}</li>
              <li className="mt-4">
                <button
                  onClick={handleSignOut}
                  className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
          >
            Login
          </Link>
        )}

        <label onClick={handleTheme} className="flex cursor-pointer ml-6 mr-4 gap-2">
          <input type="checkbox" className="toggle theme-controller" />
        </label>
      </div>
    </div>
  );
};

export default Nav;
