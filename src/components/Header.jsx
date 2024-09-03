import React from "react";
import logo1 from "../../public/images/logo1.png";

const Header = () => {
  return (
    <div className="flex h-14 w-full space-x-11 bg-[#7BAB71] shadow-green-300">
      <div className="flex ">
        <img src={logo1} className="h-[46px] w-[76px] pt-2 pl-3" alt="logo" />
        <h1 className="p-2 font-bold text-2xl tracking-wider text-gray-800">
          <span className="text-3xl font-bold font-serif">Local</span> Harvest
          Hub
        </h1>
      </div>
      <div className="flex justify-between">
        <ul className="ml-10 flex space-x-10 text-center justify-center font-serif text-lg">
          <li className="mx-2 my-3 rounded-md text-red hover:before:bg-redborder-red-500 relative h-8 w-40 overflow-hidden border border-[#7BAB71] bg-[#7BAB71] px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ac891] before:transition-all before:duration-500 hover:text-white hover:shadow-green-200 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Marketplace</span>
          </li>
          <li className="mx-2 my-3 rounded-md text-red hover:before:bg-redborder-red-500 relative h-8 w-40 overflow-hidden border border-[#7BAB71] bg-[#7BAB71] px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ac891] before:transition-all before:duration-500 hover:text-white hover:shadow-green-200 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Our Cultivators</span>
          </li>
          <li className="mx-2 my-3 rounded-md text-red hover:before:bg-redborder-red-500 relative h-8 w-40 overflow-hidden border border-[#7BAB71] bg-[#7BAB71] px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#9ac891] before:transition-all before:duration-500 hover:text-white hover:shadow-green-200 hover:before:left-0 hover:before:w-full">
            <span class="relative z-10">Our Services</span>
          </li>
        </ul>
        <button class="my-2 mx-16 rounded-md relative w-40 overflow-hidden border border-green-900 bg-[#7BAB71] text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4">
          <span class="relative z-10 font-bold font-serif">
            Join The Market
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
