import React from "react";
import "./Products.css";
import ProductItem from "../components/Products/ProductItem";
import { useStore } from "../custom-store/store";

const Products = (props) => {
  const state = useStore()[0];
  let productsToDisplay = <span>loading ....</span>;
  if (state.products) {
    productsToDisplay = (
      <ul className="products-list">
        {state.products.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            isFav={prod.isFavorite}
          />
        ))}
      </ul>
    );
  }

  return productsToDisplay;
};

export default Products;
