import { useContext } from "react";
import { SearchStore } from "./SeatchContext";

export const useSearch = () => {
  return useContext(SearchStore);
};
