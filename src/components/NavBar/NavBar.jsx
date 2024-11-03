import { NavLink } from "react-router-dom";
import bookIcon from "../../assets/book.ico";
const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-green-600 border-green-600 border">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink>Pages to Read</NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <div className="flex">
            <img src={bookIcon} alt="" />
            <a className="btn btn-ghost text-xl font-bold">Boi Poka</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end mr-4">
          <a className="btn p-1 text-black bg-green-600 md:px-6">Sign In</a>
          <a className="btn p-1 bg-blue-500 text-black md:px-6">Sign UP</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
