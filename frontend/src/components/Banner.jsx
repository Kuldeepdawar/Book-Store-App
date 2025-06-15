import React from "react";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="  max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-2 md:order-1  w-full md:w-1/2 mt-12 md:mt-35">
          <div className="space-y-12 ">
            <h1 className="text-3xl font-bold p-4">
              This book provides you knowledge related to your interest!!!!
              <span className="text-pink-500 p-4">
                You can check all Books below
              </span>
            </h1>
            <p className="text-xl">
              Hey, I think you would like all books because this is real life
              story and world innovations
            </p>
          </div>
          <label className="input validator border-none p-2 w-full mt-10">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <img src={banner} alt="banner" className="w-89 h-89" />
        </div>
      </div>
    </>
  );
};

export default Banner;
