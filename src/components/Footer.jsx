import React from "react";
import logo from "../assets/img/Logo.png";
import Twitter from "../assets/icons/Twitter.png";
import Linkedin from "../assets/icons/Linkedin.png";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#2B2B39] text-white text-[18px]">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-12 lg:flex-row justify-between items-center">
          <div className="mx-auto lg:mx-0 ">
            <a href="#" className="flex flex-row items-center gap-x-4">
              <img src={logo} alt="" width={34} />
              <p className="font-medium text-[22px] text-white">NetBook</p>
            </a>
          </div>

          <a className="hover:text-white transition text-slate-300 " href="#">
            Home
          </a>
          <a className="hover:text-white transition text-slate-300 " href="#">
            Resources
          </a>
          <a className="hover:text-white transition text-slate-300 " href="#">
            Community
          </a>
          <a className="hover:text-white transition text-slate-300 " href="#">
            Members
          </a>

          <div className="flex flex-row gap-x-2 items-center">
            <a className="hover:text-blue transition " href="#">
              <img src={Twitter} alt="" />
            </a>
            <a className="hover:text-blue transition " href="#">
              <img src={Instagram} alt="" />
            </a>
            <a className="hover:text-blue transition " href="#">
              <img src={Facebook} alt="" />
            </a>
            <a className="hover:text-blue transition " href="#">
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
