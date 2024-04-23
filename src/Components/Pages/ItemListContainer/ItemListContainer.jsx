import { useEffect, useState } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let respuesta = true;
      if (respuesta) {
        resolve(products);
      } else {
        reject({ status: 400, message: "No tienes aurizacion" });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, []);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
