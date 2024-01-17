import React, { useState } from "react";

import { FaCheck } from "react-icons/fa";

import TeamImage1 from "../assets/img/Fahim_Rahman_Image.png";
import TeamImage2 from "../assets/img/Kazi_Rahman_Image.png";
import TeamImage3 from "../assets/img/Masterero_Ali_Image.png";
import TeamImage4 from "../assets/img/Alia_Karon_Image.png";

const Members = () => {
  const [selectedTab, setSelectedTab] = useState("Active");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <section className="my-24 flex items-center" id="members">
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

          <div className="flex flex-col w-[100%] lg:w-auto lg:flex-row lg:px-2 lg:py-2 bg-accent/10 rounded-xl">
            <button
              className={`px-12 py-4  ${
                selectedTab === "Newest"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }  `}
              onClick={() => handleTabClick("Newest")}
            >
              Newest
            </button>
            <button
              className={`px-12 py-4  ${
                selectedTab === "Popular"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }`}
              onClick={() => handleTabClick("Popular")}
            >
              Popular
            </button>
            <button
              className={`px-12 py-4 ${
                selectedTab === "Active"
                  ? "bg-accent text-white rounded-[10px] transition"
                  : "bg-none"
              }`}
              onClick={() => handleTabClick("Active")}
            >
              Active
            </button>
          </div>

          <div
            className="flex flex-col gap-y-12 lg:flex-row items-center lg:justify-around w-[100%] my-8"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1200"
          >
            <div className="flex flex-col items-center team_image border-2 px-12 py-5 rounded-xl hover:border-transparent">
              <img
                src={TeamImage1}
                alt="fahim_rahman_team_image"
                width="100%"
              />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5 " />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Fahim Rahman</h3>
                <a href="#">@rahman</a>
              </div>
            </div>

            <div className="flex flex-col items-center team_image border-2 px-12 py-5 rounded-xl hover:border-transparent">
              <img src={TeamImage2} alt="kazi_rahman_team_image" width="100%" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-5" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Kazi Rahman</h3>
                <a href="#">@Rahman</a>
              </div>
            </div>

            <div className="flex flex-col items-center team_image border-2 px-12 py-5 rounded-xl hover:border-transparent">
              <img
                src={TeamImage3}
                alt="masterero_ali_team_image"
                width="100%"
              />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-8" />

              <div className="text-center">
                <h3 className="font-semibold text-[22px]">Masterero Ali</h3>
                <a href="#">@Master</a>
              </div>
            </div>

            <div className="flex flex-col items-center team_image border-2 px-12 py-5 rounded-xl hover:border-transparent">
              <img src={TeamImage4} alt="alia_karon_team_image" width="100%" />
              <FaCheck className="bg-accent p-2 text-[28px] text-white rounded-full relative bottom-8" />

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

export default Members;
