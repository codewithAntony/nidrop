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
      <div className="bg-white rounded-md shadow-md flex flex-col sm:flex-row items-center justify-between p-8 sm:p-2">
        <div className="flex-1 px-4 border border-gray-400 rounded-sm py-2 mb-2 sm:border-none">
          <p className="text-xs text-gray-500">Start</p>
          <input
            type="text"
            placeholder="Choose starting point"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="w-full outline-none text-gray-700 text-sm bg-transparent"
          />
        </div>

        <button
          onClick={handleSwap}
          className="bg-[#EB5241] hover:bg-[#EB5241] text-white rounded-full p-2 mx-2 transition-colors"
        >
          <ArrowLeftRight size={16} />
        </button>

        <div className="flex-1 px-4 border border-gray-400 rounded-sm py-2 my-2 sm:border-none">
          <p className="text-xs text-gray-500">End</p>
          <input
            type="text"
            placeholder="Choose destination"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="w-full outline-none text-gray-700 text-sm bg-transparent"
          />
        </div>

        <button className="bg-[#EB5241] hover:bg-[#EB5241] text-white rounded-full p-3 ml-2 transition-colors">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
