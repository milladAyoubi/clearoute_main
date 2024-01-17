import React from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/img/Logo.png";
import Nav from "./Nav";

import { CgMenuRight } from "react-icons/cg";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="fixed backdrop-blur-lg w-full py-6 border-b-2 border-slate z-20"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="1200"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-x-12 items-center">
          <div className="flex items-center gap-x-2">
            <img src={Logo} alt="" width={34} height={34} />
            <p className="font-bold text-xl text-black">NetBook</p>
          </div>
          <div className="hidden lg:flex gap-x-[55px] ">
            <Nav />
          </div>
        </div>

        <div className="hidden lg:flex gap-x-6">
          <div className="flex items-center gap-x-2 text-slate-400 border-b-2 border-grey ">
            <FaSearch className="text-[14px]" />
            <input
              type="text"
              placeholder="Search Here..."
              className="text-sm w-[100px] bg-transparent"
            />
          </div>
          <button className=" bg-accent hover:bg-accent-hover rounded-[10px] w-full h-10 px-8 uppercase border-2 border-transparent focus:bg-transparent focus:border-2 focus:border-accent focus:text-accent font-medium text-white   ">
            <div className="flex items-center justify-center gap-x-2">
              Register
            </div>
          </button>
          <button className="text-accent text-sm">
            <div className="flex items-center justify-center gap-x-2">
              Login
            </div>
          </button>
        </div>

        <div
          onClick={() => setNavMobile(true)}
          className="lg:hidden cursor-pointer"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
