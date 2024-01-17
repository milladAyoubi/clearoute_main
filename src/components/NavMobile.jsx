import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <div
      className={`${
        navMobile ? "right-0" : "-right-full"
      } z-20 fixed  top-0 h-full transition-all duration-200`}
    >
      <nav className="lg:hidden bg-accent text-white h-full top-0 bottom-0 w-80 flex flex-col justify-center items-center">
        <div
          onClick={() => setNavMobile(false)}
          className="absolute top-2  left-2 cursor-pointer"
        >
          <CgClose className="text-3xl" />
        </div>
        <ul className="text-xl flex flex-col gap-y-8">
          {navData.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="cursor-pointer"
                  to={item.href}
                  smooth={true}
                  duration={1000}
                  onClick={() => setNavMobile(false)}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-y-4 mt-8">
          <div className="flex items-center gap-x-2 text-white border-b-2 border-grey py-2 ">
            <FaSearch className="text-[14px]" />
            <input
              type="text"
              placeholder="Search Here..."
              className="text-sm w-[100px] bg-transparent text-white"
            />
          </div>
          <button className=" bg-white text-accent hover:bg-white/80 rounded-[10px] w-full h-10 px-8 uppercase border-2 border-transparent font-medium">
            <div className="flex items-center justify-center gap-x-2">
              Register
            </div>
          </button>
          <button className="text-white text-sm">
            <div className="flex items-center justify-center gap-x-2">
              Login
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
