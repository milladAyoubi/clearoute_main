import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/img/Logo.png";
import { navLinks } from "../constants";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(true);

  return (
    <header className="w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 py-6  border-b-2 border-grey">
      <div className="xl:container mx-auto  ">
        <nav
          className={` 
      flex flex-col bg-none gap-y-6 overflow-hidden font-boldxl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase
      text-sm xl:text-[15px] xl:normal-case `}
        >
          <div className="flex justify-between">
            <div className="flex gap-x-8 items-center">
              <div className="flex gap-x-2 items-center">
                <img src={logo} alt="" width={34} height={34} />
                <p className="font-bold text-[22px] text-black">NetBook</p>
              </div>

              <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-x-6">
              <div className="flex items-center gap-x-2 text-slate-400 border-b-2 border-grey ">
                <FaSearch className="text-[14px]" />
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="text-[12px] w-[100px]"
                />
              </div>
              <button className=" bg-accent hover:bg-accent-hover rounded-[10px] w-full h-10 px-8 uppercase font-medium text-white  text-[12px] ">
                <div className="flex items-center justify-center gap-x-2">
                  Register
                </div>
              </button>
              <button className="text-accent text-[12px]">
                <div className="flex items-center justify-center gap-x-2">
                  Login
                </div>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
