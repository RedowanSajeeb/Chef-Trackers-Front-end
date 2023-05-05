import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Tooltip,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
const { user, logout } = useContext(AuthContext);
  const loggggout = () => {
    logout();
  };
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex fontStyle items-center">
          Home
        </NavLink>
      </Typography>
      {user ? (
        <button className="fontStyle" onClick={loggggout} variant="secondary">
          Logout
        </button>
      ) : (
        <Link to={"/login"}>
          <button className="fontStyle" variant="secondary">
            Sign In
          </button>
        </Link>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal fontStyle"
      >
        <NavLink to={"/blog"} className="flex items-center">
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/account" className="flex fontStyle items-center">
          Account
        </NavLink>
      </Typography>
      <input type="checkbox" className="toggle" checked />
    </ul>
  );

  return (
    <>
      <Navbar className="sticky  inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex  items-center justify-evenly text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex items-center">
              <img
                className="h-14"
                src="https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-illustration-of-male-chef-png-image_5683388.png"
              />
              <h2 className="text-lg fontStyle ">
                Chef <span className="text-amber-900">Trackers</span>
              </h2>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              //   <Tooltip title={user.displayName}>
              //     <div>
              //       <img className="h-10 rounded" src={user.photoURL} alt="" />
              //     </div>
              //   </Tooltip>
              <Tooltip content={user.displayName} placement="top">
                <img
                  className="h-10 rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </Tooltip>
            ) : (
              <div>
                <img
                  className="h-10 rounded"
                  src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
                  alt=""
                />
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {user ? (
            <Tooltip title={user.displayName}>
              <div>
                <img className="h-10 rounded" src={user.photoURL} alt="" />
              </div>
            </Tooltip>
          ) : (
            <div>
              <img
                className="h-10 rounded"
                src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
                alt=""
              />
            </div>
          )}
        </MobileNav>
      </Navbar>
    </>
  );
}
