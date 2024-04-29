import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  // Theme state and handler
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSignOut = () => {
    logOut()
    .then(() => {
      navigate("/");
    })
    
    .catch();
  };

  const navLinks = (
    <>
      <li className=''>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/allTouristSpot">All Tourist Spots</NavLink>
      </li>
      <li className=" ml-2">
        <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/myList">My List</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/updateSpot">Update Spot</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto mb-6">
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
        <a className="p-1 text-xl md:text-2xl lg:text-3xl rounded-lg font-semibold ">
          Destination Fusion
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex">
       
        {user ? (
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
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
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
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
         <label onClick={handleTheme} className="flex  cursor-pointer ml-6 mr-4 gap-2">
         
         <input type="checkbox" className="toggle theme-controller" />
        
       </label>
      </div>
    </div>
  );
};

export default Nav;
