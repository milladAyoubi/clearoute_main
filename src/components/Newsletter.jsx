import React from "react";
import NewsletterForm from "./NewsletterFrom";

const Newsletter = () => {
  return (
    <section className="my-24 flex items-center" id="newsletter">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center
     justify-between bg-blue p-12 rounded-2xl bg-accent/90 lg:h-[216px]"
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="1200"
        >
          <div className="flex-1 w-full text-white">
            <h3 className="text-4xl font-bold mb-4">Join Us Today</h3>
            <p className="max-w-[348px] mb-8 text-white">
              An invitation to become a part of the Netbook Social Network
              community
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
