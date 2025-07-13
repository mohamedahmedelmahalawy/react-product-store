import { useState } from "react";

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchStore.Provider value={(searchValue, setSearchValue)}>
      {children}
    </SearchStore.Provider>
  );
};
