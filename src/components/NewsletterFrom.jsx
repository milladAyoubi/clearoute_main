import React from "react";

const NewsletterForm = () => {
  return (
    <form
      action=""
      className="flex-1 flex flex-col items-center w-full gap-y-6 lg:flex-row lg:gap-x-10"
    >
      <input
        className="input text-base bg-transparent text-white placeholder:text-white placeholder:text-base py-2 border-b-2"
        type="text"
        placeholder="Enter your email"
      />
      <button className=" bg-white text-darkblue px-12 py-4 rounded-xl hover:bg:white text-accent">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
