import React from "react";

import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../custom-store/store";

const ProductItem = React.memo( (props) => {
  console.log("RENDERING ProductItem");
  // what causes this component rendering multiple times is the useStore() hook.
  // since this component only use dispatch and it doesn't listen to changes in state
  // we can control it passing a value to useStore that tell it when to listen to
  // state changes.
  const dispatch = useStore(false)[1];
  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAVORITE", { productId: props.id });
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
