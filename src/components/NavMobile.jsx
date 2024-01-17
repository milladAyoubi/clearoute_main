import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navData } from "../data";
import { CgClose } from "react-icons/cg";

const NavMobile = ({ navMobile, setNavMobile }) => {
  return (
    <div
      className={`${
        navMobile ? "right-0" : "-right-full"
      } fixed z-20 top-0 h-full transition-all duration-200`}
    >
      <nav className="lg:hidden bg-accent text-white h-full top-0 bottom-0 w-80 flex justify-center items-center">
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
      </nav>
    </div>
  );
};

export default NavMobile;
