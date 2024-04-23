import React from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items, error }) => {
  return (
    <div className="product-card">
      {items.map(({ title, description, price, img, id }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            img={img}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
