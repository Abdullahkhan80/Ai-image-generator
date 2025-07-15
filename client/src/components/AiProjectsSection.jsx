import React from "react";
import { Link } from "react-router-dom";

const AiProjectsSection = () => {
  return (
    <div className="p-6 rounded-xl w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {/* Left - Image Card */}
        <div className="rounded-2xl overflow-hidden border-2 border-lime-400">
          <img
            src="./assets/download.jpeg" // Replace with your actual image
            alt="AI Generator"
            className="w-full h-full object-cover"
          />
         
        </div>

        {/* Center - Text Card */}
        <div className="flex flex-col relative justify-between">
          <img className="rounded-3xl" src="./assets/download2.jpeg" alt="" />
          <div className=" text-xs md:text-3xl absolute w-full h-full bg-gradient-to-b from-lime-400 via-transparent to-transparent text-white  font-bold rounded-2xl p-6 text-center shadow-md">
            300+ <br /> Projects
          </div>

          <div className="bg-purple-600 text-white text-sm p-4 mt-4 rounded-2xl shadow-md">
            <p className="text-[10px] font-semibold">We have the best AI image generator</p>
            <div className="flex items-center flex-wrap-reverse gap-2 mt-2">
              {/* Example avatars */}
              <img src="https://i.pravatar.cc/30?img=1" className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
              <img src="https://i.pravatar.cc/30?img=2" className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
              <img src="https://i.pravatar.cc/30?img=3" className="w-4 h-4 md:w-6 md:h-6 rounded-full" />
              <p className="hidden md:blocktext-[10px] md:text-xs ">Join our Community. We are waiting for you</p>
            </div>
          </div>
          
        </div>

        {/* Right - Icon + Button */}
        <div className="flex flex-col justify-between">
          <div className="bg-gradient-to-br from-purple-800 to-black rounded-2xl p-6 h-full flex items-center justify-center">
            {/* Stylized icons / design element */}
            <div className="relative w-20 h-20">
              <div className="absolute w-10 h-10 bg-black rotate-45 top-0 left-0"></div>
              <div className="absolute w-6 h-6 bg-lime-400 rounded-full top-4 left-12"></div>
              <div className="absolute w-16 h-4 bg-lime-400 top-6 left-4 rotate-45"></div>
            </div>
          </div>
          <Link className="mt-4 bg-lime-400 text-black text-center font-semibold rounded-2xl py-3 text-lg shadow-md hover:bg-lime-300 transition" to="/buy">
          <button >
            Try Free ↑
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiProjectsSection;
