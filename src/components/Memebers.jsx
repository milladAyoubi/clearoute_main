import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

import TeamImage1 from "../assets/img/Team_Image_1.png";
import TeamImage2 from "../assets/img/Team_Image_2.png";
import TeamImage3 from "../assets/img/Team_Image_3.png";
import TeamImage4 from "../assets/img/Team_Image_4.png";

const Memebers = () => {
  const [selectedTab, setSelectedTab] = useState("Active");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <section className="lg:h-[50vh] my-24 flex items-center" id="members">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <p className=" text-accent/90 font-medium  flex gap-x-1 text-[20px]">
              Valuable Team
            </p>
            <h2 className="font-bold text-4xl">Our Active Members</h2>
            <p>
              when an unknown printer took a galley of type and meeting{" "}
              <br></br> fari scrambled it.
            </p>
          </div>

          <div className="flex p-2 bg-accent/10 rounded-xl">
            <button
              className={`px-10 py-4  ${
                selectedTab === "Newest"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }  `}
              onClick={() => handleTabClick("Newest")}
            >
              Newest
            </button>
            <button
              className={`px-10 py-4  ${
                selectedTab === "Popular"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }`}
              onClick={() => handleTabClick("Popular")}
            >
              Popular
            </button>
            <button
              className={`px-10 py-4 ${
                selectedTab === "Active"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }`}
              onClick={() => handleTabClick("Active")}
            >
              Active
            </button>
          </div>

          <div className="flex flex-row items-center justify-around w-[100%] mt-8">
            <div className="flex flex-col items-center">
              <img src={TeamImage1} alt="" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Fahim Rahman</h3>
                <a href="#">@rahman</a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={TeamImage2} alt="" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Kazi Rahman</h3>
                <a href="#">@Rahman</a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={TeamImage3} alt="" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Masterero Ali</h3>
                <a href="#">@Master</a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src={TeamImage4} alt="" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Alia Karon</h3>
                <a href="#">@Alia</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memebers;
