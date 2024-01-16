import React from "react";
import {FaChevronCircleDown} from 'react-icons/fa'
import HeroImage from "../HeroImage.png"

const Hero = () => {
  return (
    <section className='h-screen lg:h-[90vh] bg-gradient-to-t from-gradient' id='home'>
    <div className="container mx-auto  h-full lg:pt-10">
      <div className="flex flex-col lg:flex-row justify-center text-center lg:text-left items-center lg:gap-x-0 lg:justify-start h-full">
        <div className="text-center lg:max-w-[700px] lg:text-left mt-16  lg:mt-0">
          <div className=" flex justify-center lg:justify-start">
        <p className='bg-accent/10 w-[205px] text-accent font-medium py-2 px-6 rounded-full'>
          Netbook Community
        </p>
        </div>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-bold">
           Your Solutions For Community!
          </h1>
          <p className="py-2 text-lg text-gray-600">
            
          More than 2 billion people in over countries use socibook to stay in touch with friends & family.
          </p>
          <div className='flex gap-x-3 justify-center lg:justify-start'>
          <button className=' bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]'>
                  <div className='flex items-center justify-center gap-x-2'>
                    View Collection
                    <FaChevronCircleDown className='text-[18px]'/>
                  </div>
            </button>

            <button className=' bg-none border-2 border-accent  rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]'>
                  <div className='flex items-center justify-center gap-x-2 text-accent'>
                    Invite Friend
                  </div>
            </button>
          </div>
         
        </div>

        <div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;