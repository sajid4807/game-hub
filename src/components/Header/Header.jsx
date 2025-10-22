import { Link, NavLink } from "react-router";
import MyLink from "../MyLink/MyLink";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Header = () => {


  const {user,logOut} = use(AuthContext)

  const handleLogOut = () =>{
    // console.log("clicked log out")
    logOut()
  }


  const links = (
    <>
      <li>
        <MyLink to="/">
          Home
        </MyLink>
      </li>
      <li>
        <MyLink to="/game">
          All Game
        </MyLink>
      </li>
      {/* <li>
        <MyLink to="/login" className="">
          Login
        </MyLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-44 bg-gradient-to-r from-[#c2e9fb] via-[#fefefe] to-[#fceabb]">
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
        <NavLink to="/">GameHub</NavLink>
      </div>
      <div>{user && user.email}</div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-7">
        <NavLink to='/register' className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Register</NavLink>

        {
          user ? 
          <button onClick={handleLogOut} className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Logout</button> : 
          <Link to='/login' className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Login</Link>
        }
        {/* <a className="btn bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white">Button</a> */}
      </div>
    </div>
  );
};

export default Header;
