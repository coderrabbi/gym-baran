import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "@/style";
const menuItems = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "Program",
    path: "/program",
    id: 2,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 3,
  },
  {
    name: "About Us",
    path: "/about",
    id: 5,
  },
];
const Navbar = () => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <header className="">
      <nav className=" lg:w-full backdrop-blur-sm border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex gap-1 items-center">
            <span className="self-center text-xl font-SportingGrotesque whitespace-nowrap text-white bg-secondary p-2 rounded-xl shadow-custom">
              Gym
            </span>
            <span className="self-center text-xl font-SportingGrotesque whitespace-nowrap text-black">
              baran
            </span>
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              className={`flex flex-col items-center mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0`}
            >
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`${item.path}`}
                    className={` block py-2 pr-4 pl-3  text-black lg:p-0 `}
                    aria-current="page"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <span className="flex justify-between items-center gap-3">
                  <Link href="/auth/login">
                    <button
                      className={`font-poppins  bg-primary shadow-btnShadow font-poppi text-white rounded-lg py-2 px-6 text-[16px] font-normal`}
                    >
                      Login
                    </button>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="block relative lg:hidden pb-2">
            <div className="relative flex justify-end items-center gap-3 sm:max-w-xl mx-auto">
              <button
                className=" text-black w-10 h-10 relative focus:outline-none bg-transparent"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <div className="block w-8 absolute gap-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                      isMenu ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute  h-0.5 w-8 bg-current  transform transition duration-100 ease-in-out ${
                      isMenu ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    aria-hidden="true"
                    className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                      isMenu ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
          {isMenu && (
            <div
              className={`h-[280px] flex absolute top-[60px] right-0  bg-gray-500 z-[99] w-[250px] py-8 rounded-xl text-white justify-between border-t-2  mx-auto lg:hidden ${
                isMenu
                  ? "scale-up-center"
                  : "animate-out slide-out-from-left duration-300"
              } `}
            >
              <ul
                className={`flex flex-col justify-start items-center w-full mx-auto font-medium`}
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`${item.path}`}
                      className={`mb-4 block  pr-4 pl-3 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 `}
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <span className="flex justify-between items-center gap-3">
                    <Link href="/auth/login">
                      <button
                        className={`font-poppins  bg-primary shadow-btnShadow font-poppi text-white rounded-lg py-2 px-6 text-[16px] font-normal`}
                      >
                        Login
                      </button>
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
