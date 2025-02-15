import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productsSlice";
import ProductCard from "../components/ProductCard";
import { Spinner } from "react-bootstrap";

const ProductsWithThunk = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  console.log(products, isLoading, error);
  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner />
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsWithThunk;
