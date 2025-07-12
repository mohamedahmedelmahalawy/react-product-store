import { create } from "domain";
import { useState } from "react";

const SearchStore = create();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchStore.Provider value={(searchValue, setSearchValue)}>
      {children}
    </SearchStore.Provider>
  );
};

const useSearch = () => {};
