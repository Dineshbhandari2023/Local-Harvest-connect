import React from "react";
import logo1 from "../../public/images/logo1.png";

const Header = () => {
  return (
    <div className="flex h-14 w-full space-x-11 bg-[#7BAB71]">
      <div className="flex ">
        <img src={logo1} className="h-[46px] w-[76px] pt-2 pl-3" alt="logo" />
        <h1 className="p-2 font-bold text-2xl tracking-wider">
          <span className="text-3xl font-bold font-serif">Local</span> Harvest
          Hub
        </h1>
      </div>
      <div className="flex justify-between">
        <ul className="ml-10 flex space-x-10 text-center justify-center font-serif text-lg">
          <li className="space-x-6 justify-center text-center m-3 px-10 rounded-md cursor-pointer hover:bg-[#afdea6]">
            Marketplace
          </li>
          <li className="space-x-6 justify-center text-center m-3 px-10 rounded-md cursor-pointer hover:bg-[#afdea6]">
            Our Cultivators
          </li>
          <li className="space-x-6 justify-center text-center m-3 px-10 rounded-md cursor-pointer hover:bg-[#afdea6]">
            Our Services
          </li>
        </ul>
        <button className="justify-center text-center mt-3 ml-28 px-2 h-8 rounded-md border-none bg-[#d2f5cb] font-serif">
          Join the Market
        </button>
      </div>
    </div>
  );
};

export default Header;
