import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {cart.products.length == 0 ? (
        <p className="text-danger"> No product in cart</p>
      ) : (
        <div className=" products-contianer">
          {cart.products?.map((product) => (
            <ProductCard product={product} key={product.id} isCartItem={true} />
          ))}
        </div>
      )}
      <table class="table">
        <thead>
          <tr>
            <td>Total price</td>
            <td>Total count</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cart.totalPrice}</td>
            <td>{cart.totalQuantity}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
