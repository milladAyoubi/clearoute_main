import React from "react";

import { FaRegStar } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";

import { FaArrowRight } from "react-icons/fa6";

import People from "../assets/img/People.png";
import Github from "../assets/img/Github.png";

const Achievement = () => {
  return (
    <section
      className="my-24 flex items-center"
      id="achievement"
      data-aos="fade-right"
      data-aos-delay="1000"
      data-aos-duration="1200"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[45px] lg:flex-row">
          <div className="py-12 px-6 shadow-primary cursor-pointer lg:w-[60%] border-2 border-gray rounded-3xl card">
            <div className="flex flex-col justify-center gap-y-5">
              <div className="flex items-center gap-x-4">
                <FaRegStar className="text-3xl text-accent shake" />
                <h3 className="text-[20px]">4.8 Rating</h3>
              </div>

              <div className="flex items-center gap-x-4">
                <img src={People} alt="people" />
                <div>
                  <p>
                    <span className="text-accent font-bold">+836K</span> Members
                  </p>
                </div>
              </div>

              <div>
                <div className="text-[20px] text-slate-500">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
              </div>

              <div className="my-4">
                <button className="font-medium flex flex-row items-center gap-x-2 hover:text-accent transition">
                  Join Community
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="py-12 px-6 shadow-primary cursor-pointer lg:w-[60%] border-2 border-gray rounded-3xl card">
            <div className="flex flex-col justify-center gap-y-5">
              <div className="flex items-center gap-x-4">
                <IoTrophyOutline className="text-3xl text-accent shake" />
                <h3 className="text-[20px]">Awwwards</h3>
              </div>

              <div className="flex items-center gap-x-4">
                <img src={Github} alt="people" />
                <div>
                  <p>
                    Best of <span className="text-accent font-bold">2021</span>{" "}
                    on Github
                  </p>
                </div>
              </div>

              <div>
                <div className="text-[20px] text-slate-500">
                  More than 2 billion we people over countries use socibooks we
                  to stay in touch with friends.
                </div>
              </div>

              <div className="my-4">
                <button className="font-medium flex flex-row items-center gap-x-2 hover:text-accent transition">
                  Go To Awards
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8">
            <div className="">
              <p className=" text-accent/90 font-medium mb-2 flex gap-x-1 text-md">
                Our Achievement
              </p>
              <h2 className="h2">We are Connecting You The Digital Life.</h2>
              <p>
                The scope the Social Media becomes crucial Is helps the business
                to directly engage with their needs and wants.
              </p>
            </div>
            <button className=" bg-accent hover:bg-accent-hover focus:bg-transparent focus:border-2 drop-shadow-[0_10px_10px_rgba(33,123,254,0.25)] hover:-translate-y-1 transition  focus:border-accent focus:text-accent  rounded-[15px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[224px]">
              <div className="flex items-center justify-center gap-x-4">
                Discover me
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
