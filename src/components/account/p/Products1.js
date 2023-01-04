import React from "react";
import ProductCategoriesList from "./ProductCategoriesList1";
import ProductsList from "./ProductsList1";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductsList />
      <ProductCategoriesList />
    </div>
  );
};

export default Products1;
