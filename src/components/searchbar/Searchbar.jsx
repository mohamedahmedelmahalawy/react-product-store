import React, { useState } from "react";

function Searchbar({ handleSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <form className="flex justify-center items-center gap-2 mx-auto my-8 w-96 appearance-none">
      <input
        type="text"
        className="bg-yellow-200 px-4 py-2 border-non outline-none w-96 max-w-80 text-lg"
        onChange={handleChange}
        value={searchValue}
        placeholder="Search..."
      />
      {/* <button
        type="submit"
        className="bg-yellow-200 px-4 py-2 font-bold text-black text-lg"
      >
        Search
      </button> */}
    </form>
  );
}

export default Searchbar;
