import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import HeroImage from "../assets/img/Hero_Image.png";
import ChatBox1 from "../assets/img/Chat_1.png";
import ChatBox2 from "../assets/img/Chat_2.png";

const Hero = () => {
  return (
    <section className=" py-24 bg-gradient-to-t from-gradient" id="home">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-center text-center lg:text-left items-center lg:gap-x-0 lg:justify-start h-full">
          <div className="text-center lg:max-w-[600px] lg:text-left mt-16 lg:mt-0">
            <div className=" flex justify-center lg:justify-start">
              <p className="bg-accent/10  text-accent font-medium py-2 px-6 rounded-[10px] floating2 mb-4">
                Netbook Community
              </p>
            </div>
            <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-bold">
              Your Solutions For Community!
            </h1>
            <p className="py-2 text-lg text-gray-600 my-4">
              More than 2 billion people in over countries use socibook
              <br></br> to stay in touch with friends & family.
            </p>
            <div className="flex gap-x-3 justify-center lg:justify-start">
              <button className=" bg-accent hover:bg-accent-hover rounded-[15px] focus:bg-transparent focus:border-2 focus:border-accent focus:text-accent  w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]">
                <div className="flex items-center justify-center gap-x-2">
                  Learn More
                  <FaChevronCircleDown className="text-[18px]" />
                </div>
              </button>

              <button className=" bg-none border-2 border-accent  rounded-[15px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]">
                <div className="flex items-center justify-center gap-x-2 text-accent">
                  Invite Friend
                </div>
              </button>
            </div>
          </div>

          <div className="lg:flex hidden">
            <div>
              <img src={HeroImage} alt="Hero_Image" width="100%" />
              <img
                src={ChatBox1}
                alt="ChatBox1"
                className="relative lg:bottom-[210px] lg:left-[180px] xl:bottom-[240px] xl:left-[220px] floating2"
              />
              <img
                src={ChatBox2}
                alt="ChatBox2"
                className="relative lg:bottom-[490px] lg:left-[320px] xl:bottom-[540px] xl:left-[360px] floating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
