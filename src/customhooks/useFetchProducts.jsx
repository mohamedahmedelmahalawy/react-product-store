import React, { useEffect, useState } from "react";
import { AxiosInterceptor } from "../interceptors/interceptor";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    AxiosInterceptor.get("/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
        // console.log(res.data.products);
      })
      .catch((err) => {
        setError("Error fetching products:", err);
        setLoading(false);
      });
  }, []);
  return { products, loading, error };
}

export default useFetchProducts;
