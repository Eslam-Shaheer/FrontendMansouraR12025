import React from "react";
import styles from "./product-wrapper.module.css";
const ProductWrapper = ({ children }) => {
  return (
    <div className={styles.productWrapper}>
      <span>Wrapper Component</span>
      {children}
    </div>
  );
};

export default ProductWrapper;
