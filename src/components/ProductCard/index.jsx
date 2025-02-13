import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
const ProductCard = ({ product, isCartItem = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromCart(product));
  };
  return (
    <Link to={`/products/${product.id}`}>
      <div className="card mb-4" style={{ maxWidth: "18rem" }}>
        <img src={product.image} alt={product.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: {product.price}</p>
          {/* <p className="card-text">
          Description: {product.description}
          </p> */}
          {isCartItem ? (
            <button className="btn btn-primary" onClick={handleRemoveFromCart}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
