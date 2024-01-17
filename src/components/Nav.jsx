import React, { useState } from "react";
import { Link } from "react-scroll";
import { navData } from "../data/index";
import { FaSearch } from "react-icons/fa";
import { navLinks } from "../data/index";
import Logo from "../assets/img/Logo.png";

const Nav = () => {
  const [active, setActive] = useState(true);
  return (
    <nav className="flex items-center">
      <ul className="flex gap-x-8">
        {navData.map((item, index) => {
          return (
            <li
              className="border-b-2 border-transparent text-[10px] hover:border-accent transition-all duration-300"
              key={index}
            >
              <Link
                className="cursor-pointer text-sm"
                onClick={() => setActive(true)}
                to={item.href}
                spy={true}
                smooth={true}
                offset={50}
                duration={1500}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
