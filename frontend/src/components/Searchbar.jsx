import React, { useState } from "react";
import { ArrowLeftRight, Search } from "lucide-react";

const SearchBar = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSwap = () => {
    setStart((prevStart) => {
      const temp = end;
      setEnd(prevStart);
      return temp;
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      {/* Container */}
      <div className="bg-white rounded-sm shadow-md flex flex-col sm:flex-row items-center justify-between p-8 sm:p-2">
        {/* Start Input */}
        <div className="flex-1 px-4 border border-gray-400 rounded-sm py-2 mb-2 lg:border-none">
          <p className="text-xs text-gray-500">Start</p>
          <input
            type="text"
            placeholder="Choose starting point"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full outline-none text-gray-700 text-sm bg-transparent"
          />
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 mx-2 transition-colors"
        >
          <ArrowLeftRight size={16} />
        </button>

        {/* End Input */}
        <div className="flex-1 px-4 border border-gray-400 rounded-sm py-2 my-2 lg:border-none">
          <p className="text-xs text-gray-500">End</p>
          <input
            type="text"
            placeholder="Choose destination"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full outline-none text-gray-700 text-sm bg-transparent"
          />
        </div>

        {/* Search Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 ml-2 transition-colors">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
