import React, { useContext, useEffect, useState } from "react";
import ProductWrapper from "../ProductWrapper";
import ThemeContext from "../../contexts/ThemeContext";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
const Products = () => {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
  });

  const { data: users } = useQuery({
    queryKey: ["USERS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users");
      return response.data;
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      await axiosInstance.patch("/products/1", {
        price: 15,
      });
    };
    fetchData();
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "sss");
    //     setProducts(data);
    //   });
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     setError(null);
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response.data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    // axios.get("https://fakestoreapi.com/products").then((response) => {
    //   setProducts(response.data);
    // });
  }, []);

  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      <div className="d-flex gap-2">
        <h1>Products</h1>
        <button onClick={() => setShowProducts(!showProducts)}>
          Toggle show product
        </button>
      </div>
      {isLoading && (
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <Spinner animation="border" />
        </div>
      )}
      {error ? (
        <p className="text-danger">{error.message}</p>
      ) : (
        <div>
          <div className=" products-contianer">
            {products?.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                isCartItem={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
