import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { Skeleton } from "@mui/material";
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
        setTimeout(() => {
          resolve(name ? productoFiltrado : products);
        }, 1500);
      } else {
        reject({ error });
      }
    });

    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="product-card">
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={60}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={40}
            width={250}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={60}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={40}
            width={250}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={60}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={40}
            width={250}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={60}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={250}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={40}
            width={250}
          />
        </div>
      </div>
    );
  }

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
