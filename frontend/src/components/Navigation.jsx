import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowLeftRight, Search } from "lucide-react";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-center">
        <div className="pt-3">
          <div className="flex gap-1">
            <div
              className={`w-24 h-10 bg-white flex items-center justify-center text-center text-[#1D313F] font-bold text-2xl cursor-pointer rounded-sm p-2 transition-all ease-in-out duration-500 hover:bg-[#1D313F] hover:text-white`}
              onClick={() => setIsActive(!isActive)}
            >
              nidrop
            </div>

            <button
              className={`relative w-30 h-10 bg-white flex items-center justify-center text-[#1D313F] cursor-pointer rounded-sm transition-all ease-in-out duration-500 group px-3`}
              onClick={() => setIsActive(!isActive)}
            >
              <div className="absolute inset-0 bg-[#1D313F] transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
              <div className="relative z-10 gap-1 flex items-center justify-center w-full">
                <span className="text-md font-bold uppercase transition-colors duration-300 group-hover:text-white">
                  menu
                </span>
                <div className="transition-all duration-300 group-hover:text-white">
                  {isActive ? (
                    <FaTimes className="text-sm" />
                  ) : (
                    <FaBars className="text-sm" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-bold text-[#1D313F] text-2xl">Directions</p>
        <div className=" flex items-center bg-white rounded-full shadow-md w-full max-w-3xl mx-auto p-2">
          <div className="flex-1 px-4">
            <p className="text-xs text-gray-500">Start</p>
            <input
              type="text"
              placeholder="Choose starting point"
              className="w-full outline-none text-gray-700 text-sm bg-transparent"
            />
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2">
            <ArrowLeftRight size={16} />
          </button>

          <div className="flex-1 px-4">
            <p className="text-xs text-gray-500">End</p>
            <input
              type="text"
              placeholder="Choose destination"
              className="w-full outline-none text-gray-700 text-sm bg-transparent"
            />
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 ml-2">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
