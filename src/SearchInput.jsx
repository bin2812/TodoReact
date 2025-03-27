import React, { useState } from "react";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState(""); // value của input

  return (
    <label
      htmlFor="task"
      className="bg-gray-200 min-h-12 placeholder-gray-800 flex items-stretch rounded-3xl justify-between pl-4 mt-6 cursor-text"
    >
      <input
        id="task"
        type="text"
        placeholder="Search your task..."
        className="focus-visible:outline-none flex-1"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        // onClick={handleAddTask}
        className="text-white bg-[#fe653d] text-[18px] rounded-3xl px-8 cursor-pointer hover:opacity-90"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </label>
  );
};

export default SearchInput;
