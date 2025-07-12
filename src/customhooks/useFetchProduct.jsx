import React, { useEffect, useState } from "react";
import { AxiosInterceptor } from "../interceptors/interceptor";

function useFetchProduct(id) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    AxiosInterceptor.get("/products/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        setError("Error fetching products:", err);
        setLoading(false);
      });
  }, [id]);
  return { product, loading, error };
}

export default useFetchProduct;
