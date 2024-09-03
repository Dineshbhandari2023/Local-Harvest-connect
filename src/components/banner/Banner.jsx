import React from "react";
import banner from "../../../public/images/cartimage.png";
import Footer from "../footer/Footer";
import Signup from "../create-account/Signup";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="flex justify-center text-center">
        <div className="w-3/5">
          <h2 className="justify-center text-center text-gray-700 tracking-wider font-bold text-5xl mt-20 px-9 py-5 gap3">
            Connect with local farmers and get fresh Products to your
            doorstep...
          </h2>
          <div className="justify-center text-center mt-20">
            <button className="justify-center text-center mt-3 px-2 h-10 rounded-md border-none bg-green-500 font-serif before:ease relative w-40 overflow-hidden border border-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              Start Selling
            </button>
            <button className="justify-center text-center mt-3 ml-28 px-2 h-10 rounded-md border-none bg-green-500 font-serif before:ease relative w-40 overflow-hidden border border-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              Start Buying
            </button>
          </div>
        </div>
        <img
          className="w-2/5 shadow-md shadow-gray-400"
          src={banner}
          alt="banner"
        />
      </div>
      <div className="flex justify-between mx-9 my-10 bg-green-100">
        <div className="mx-3 my-4 py-3 px-6 w-2/6 bg-[#ECFDF5] rounded-md shadow-lg shadow-green-400">
          <h2 className="text-center text-gray-700 tracking-wider font-bold text-3xl underline px-9 py-5">
            Our Mission
          </h2>
          <p className="text-center text-gray-800 tracking-wide text-md">
            Harvest Connect is a community-driven platform that connects
            farmers, consumers, and businesses to exchange fresh, locally
            sourced produced resources.
          </p>
          <button className="m-6 px-3 py-1 rounded-md border border-green-800 hover:border-2 hover:border-green-500">
            Our Services
          </button>
        </div>

        <div className="mx-3 my-4 py-3 px-6 w-2/6 bg-[#ECFDF5] rounded-md shadow-lg shadow-green-400">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Need a help in Claim?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
          <a
            href="#"
            className="mt-5 inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            See our guideline
            <svg
              className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
              />
            </svg>
          </a>
        </div>
        <div className="mx-3 my-4 py-3 px-6 w-2/6 bg-[#ECFDF5] rounded-md shadow-lg shadow-green-400">
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Need a help in Claim?
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Go to this step by step guideline process on how to certify for your
            weekly benefits:
          </p>
        </div>
      </div>
      <Signup />
      <Footer />
    </div>
  );
};

export default Banner;
