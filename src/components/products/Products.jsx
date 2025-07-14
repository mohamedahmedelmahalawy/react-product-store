import Product from "../product/Product";
import useFetchProducts from "../../customhooks/useFetchProducts";
import PulseLoader from "react-spinners/PulseLoader";
import Navbar from "../navbar/Navbar";
import Searchbar from "../searchbar/Searchbar";
import useFetchSearch from "../../customhooks/useFetchSearch";
import { useState } from "react";
import ProtectedRoute from "../protectedroute/ProtectedRoute";

function Products() {
  const { products, loading } = useFetchProducts();
  const [seachValue, setSearchValue] = useState("");
  const { products: productsFromSearch } = useFetchSearch(seachValue);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  console.log(productsFromSearch);
  return (
    <>
      <Searchbar handleSearch={handleSearch} />
      <ul
        className={`flex justify-center bg-[#030712]  p-4 ${
          loading
            ? "flex-col items-center  min-h-screen"
            : "flex-wrap  gap-4 h-full"
        }`}
      >
        {loading && (
          <h1 className="flex items-end my-auto text-yellow-200 text-8xl align-middle">
            <span>Loading</span>
            <PulseLoader color="#fff085" size={20} />
          </h1>
        )}
        {products &&
          seachValue === "" &&
          products?.map((p) => {
            return <Product key={p.id} {...p} product={p} />;
          })}
        {productsFromSearch &&
          seachValue &&
          productsFromSearch?.map((p) => {
            return <Product key={p.id} {...p} product={p} />;
          })}
      </ul>
    </>
  );
}

export default Products;
