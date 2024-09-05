import React from "react";
// import Banner from "../../../public/images/cartimage.png";
import Footer from "../footer/Footer";
import Signup from "../create-account/Signup";
import { Parallax } from "react-parallax";
import Mission from "./Mission";

const Banner = () => {
  return (
    <div className="flex flex-col justify-center text-center">
      <div className="flex justify-center text-center">
        <Parallax
          bgImage="../../../public/images/Mix1.jpg"
          bgImageAlt="Banner"
          strength={400}
          className="relative bg-cover bg-no-repeat"
        >
          <h2 className="justify-center text-center text-neutral-200 tracking-wider font-serif font-bold text-5xl mt-20 px-20 py-10">
            Connect with local farmers and get fresh Products to your
            doorstep...
          </h2>
          <div className="flex justify-center text-center mb-32 space-x-14">
            <button className="justify-center text-center mt-3 px-2 h-10 rounded-md bg-green-500 font-serif before:ease relative w-40 overflow-hidden border-2 border-green-200 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              Start Selling
            </button>
            <button className="justify-center text-center mt-3 px-2 h-10 rounded-md bg-green-500 font-serif before:ease relative w-40 overflow-hidden border-2 border-green-200 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              Start Buying
            </button>
          </div>
          <Mission />
        </Parallax>
      </div>
      <Signup />
      <Footer />
    </div>
  );
};

export default Banner;
