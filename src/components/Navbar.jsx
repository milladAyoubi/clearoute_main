import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
import logo from "../logo192.png"
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(true)

  return (
    <header className="fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300 py-4 border-b-2 border-grey">
    <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
    
    <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} 
      flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase
      text-sm xl:text-[15px] xl:normal-case`}> 
      
   
        <div className="flex gap-x-8 items-center">
            <div className="flex gap-x-2 items-center">
            <img src={logo} alt="" width={34}  height={34}/>
            <h2>Netbook</h2>
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

      <div className="flex gap-x-6">
       <div className="flex items-center gap-x-2 text-slate-400 border-b-2 border-grey ">
       <FaSearch className='text-[14px]'/>
       <input type="text" placeholder="Search Here..." className="text-[12px] w-[100px]"/>
       </div>
      <button className=' bg-accent hover:bg-accent-hover rounded-[10px] w-full h-10 px-8 uppercase font-medium text-white  text-[10px] '>
                  <div className='flex items-center justify-center gap-x-2'>
                    Log in
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