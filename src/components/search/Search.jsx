// import { useSearchParams } from "react-router-dom";

function Search() {
  //   const [searchParam, setSearchParam] = useSearchParams();
  const { products } = useFetchSearch("eye");

  return <div></div>;
}

export default Search;
