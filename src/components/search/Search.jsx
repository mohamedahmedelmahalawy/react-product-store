import { useSearchParams } from "react-router-dom";
import useFetchSearch from "../../customhooks/useFetchSearch";
import ProductCard from "../cartproduct/CartProduct";
import Searchbar from "../searchbar/Searchbar";

function Search() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const { products, loading, error } = useFetchSearch(searchQuery);

  return (
    <div className="mx-auto px-4 py-8 text-amber-300 container">
      <div className="mb-8">
        <Searchbar initialValue={searchQuery} />
      </div>

      <h1 className="mb-6 font-bold text-2xl">
        {searchQuery
          ? `Search Results for: "${searchQuery}"`
          : "Search Products"}
      </h1>

      {loading ? (
        <div className="py-12 text-center">Loading products...</div>
      ) : error ? (
        <div className="py-12 text-red-500 text-center">Error: {error}</div>
      ) : products?.length > 0 ? (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          {searchQuery
            ? "No products found matching your search"
            : "Enter a search term to find products"}
        </div>
      )}
    </div>
  );
}

export default Search;
