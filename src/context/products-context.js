import React, { useState } from "react";

export const ProductsContext = React.createContext({
  product: [],
  toggleFavorite: (productId) => {},
});

const initialState = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

export default ({ children }) => {
  const [productList, setProductList] = useState(initialState);

  const toggleFavoriteProduct = (productId) => {
    setProductList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...productList];
      updatedProducts[prodIndex] = {
        ...productList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productList, toggleFavorite: toggleFavoriteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
