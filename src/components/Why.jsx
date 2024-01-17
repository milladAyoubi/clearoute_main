import React from "react";
import WhyImage from "../assets/img/Why_Image.png";
import { FaCheck } from "react-icons/fa";
const Why = () => {
  return (
    <section className="my-24 flex items-center" id="why">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-8 lg:justify-between">
          <div className="flex items-center lg:justify-center">
            <div className="lg:max-w-[420px]">
              <p className=" text-accent/90 font-medium mb-2 flex gap-x-1 text-md">
                Whats Netboks?
              </p>
              <h2 className="h2">Why Join to Netbook Social Network?</h2>
              <p>
                Recent surveys have indicated that small businesses recognise
                the need they have to connect with consumer.
              </p>
            </div>
          </div>

          <div className="floating ">
            <img src={WhyImage} alt="WhyImage" width="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
