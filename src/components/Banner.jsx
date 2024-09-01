import React from "react";
import banner from "../../public/images/cartimage.png";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div className="w-3/5">
        <h2 className="justify-center text-center tracking-wider font-bold text-5xl mt-20 px-9 py-3">
          Connect with local farmers and get fresh Products to your doorstep...
        </h2>
        <div className="justify-center text-center mt-10">
          <button className="bg-[#65A30D] px-8 py-1 text-xl font-semibold tracking-wide rounded-md hover:bg-[#d8f6ad] m-3">
            Start Selling
          </button>
          <button className="bg-[#65A30D] px-8 py-1 text-xl font-semibold tracking-wide rounded-md hover:bg-[#d8f6ad] m-3">
            Start Buying
          </button>
        </div>
      </div>
      <img className="w-2/5" src={banner} alt="" />
    </div>
  );
};

export default Banner;
