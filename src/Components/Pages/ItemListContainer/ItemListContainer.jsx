import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let productoFiltrado = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let respuesta = true;
      if (respuesta) {
        resolve(name ? productoFiltrado : products);
      } else {
        reject({ error });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
