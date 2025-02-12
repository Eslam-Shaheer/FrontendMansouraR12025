import React, { useContext, useState } from "react";
import ProductWrapper from "../ProductWrapper";
import ThemeContext from "../../contexts/ThemeContext";

const Products = () => {
  // const toggleProducts = () => {

  // }

  const products = [
    {
      id: "1",
      name: "Odense 8-Seater Top Dining Table",
      price: 2150000,
      quantity: 0,
      imgURL:
        "https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
      categoryID: 1,
      matrial: "Engineered Wood",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
    },
    {
      id: "5",
      name: "Trixia 4-Seater Glass Dining Table",
      price: 31240000,
      quantity: 8,
      imgURL:
        "https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
      categoryID: 1,
      matrial: "Metal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
    },
    {
      id: "25",
      name: "Gasha Marble Top Side Table",
      price: 1154000,
      quantity: 10,
      imgURL:
        "https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
      categoryID: 1,
      matrial: "Metal",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
    },
    {
      id: "7",
      name: "Ventura Fabric Dining Chair",
      price: 12346500,
      quantity: 2,
      imgURL:
        "https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
      categoryID: 2,
      matrial: "Upholstered Seating",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint iure magni eum commodi sunt. Magnam quod asperiores aut voluptatem, beatae culpa sapiente corporis magni repellendus aspernatur quos voluptatibus odio dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt omnis nisi maiores hic repellendus quisquam, neque et eligendi voluptate. Eveniet error cupiditate nulla, quibusdam facilis nostrum magni ullam quo.",
    },
  ];

  const [showProducts, setShowProducts] = useState(true);

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className="d-flex gap-2">
        <h1>Products</h1>
        <button onClick={() => setShowProducts(!showProducts)}>
          Toggle show product
        </button>
      </div>

      {showProducts ? (
        <>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-2 " key={product.id}>
                <div className="card mb-4">
                  <img
                    src={product.imgURL}
                    alt={product.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Material: {product.matrial}</p>
                    {/* <p className="card-text">
                      Description: {product.description}
                    </p> */}
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <span>Products is hidden</span>
      )}
    </div>
  );
};

export default Products;
