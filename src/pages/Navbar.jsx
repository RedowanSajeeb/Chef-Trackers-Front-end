import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={'/blog'} className="flex items-center">
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to={"/login"} className="flex items-center">
         Sign In
        </NavLink>
        
      </Typography>
      
    </ul>
    
  );

  return (
    <Navbar className="mx-auto  text-black sticky top-0  mt-5 md:mb-8 md:mt-5 py-2 px-4  ">
      <div className="container mx-auto flex  items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <div className="flex items-center">
            <img
              className="h-14"
              src="https://png.pngtree.com/png-clipart/20220705/ourmid/pngtree-illustration-of-male-chef-png-image_5683388.png"
            />
            <h2 className="text-2xl">
              Chef <span>Trackers</span>
            </h2>
          </div>
        </Typography>
        <div className="hidden text-slate-500 lg:block">{navList}</div>
        <div>
          <Switch defaultChecked />
        </div>
        <div>
          <img
            className="h-10 rounded"
            src="https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png"
            alt=""
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto  w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
