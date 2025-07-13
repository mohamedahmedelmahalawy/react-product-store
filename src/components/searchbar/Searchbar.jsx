import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/searchcontext/useSearch";

function Searchbar({ initialValue = "" }) {
  const { searchValue, setSearchValue } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 rounded-md">
      <input
        type="text"
        placeholder="Search products..."
        className="bg-[#0e0f12] px-2 border-none rounded focus:outline-none focus:ring-1 focus:ring-amber-500 text-white"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue || initialValue}
      />
      <button
        type="submit"
        className="bg-gray-700 px-3 py-1 rounded hover:text-amber-500"
      >
        Search
      </button>
    </form>
  );
}

export default Searchbar;
