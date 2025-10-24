import { Link, NavLink, useLocation, useNavigate } from "react-router";
import MyLink from "../MyLink/MyLink";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import profileImg from "../../assets/sajid.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut();
    navigate(`${location.state ? location.state : "/"}`);
  };
  const links = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/game">All Game</MyLink>
      </li>
      <li>
        {user ? (
          <MyLink to="/profile" className="">
            Profile
          </MyLink>
        ) : (
          ""
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-36 bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb]">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="font-extrabold lg:text-2xl ">
          Game<span className="text-yellow-500">Hub</span>{" "}
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5 items-center">
            <div>
              <Link to="/profile">
                <img
                  src={`${user ? user?.photoURL : profileImg}`}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            </div>
            <button
              onClick={handleLogOut}
              className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-7">
            <NavLink
              to="/register"
              className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white"
            >
              Register
            </NavLink>
            <Link
              to="/login"
              className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
