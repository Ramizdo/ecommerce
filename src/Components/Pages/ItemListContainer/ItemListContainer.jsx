import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CircularProgress, Skeleton, Stack } from "@mui/material";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    getDocs(consulta).then((respuesta) => {
      let newArray = respuesta.docs.map((document) => {
        return { id: document.id, ...document.data() };
      }); // []
      setItems(newArray);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div className="loading">
        <CircularProgress size={80} />
      </div>
    );
  }

  return (
    <>
      <h1 className="titulo2">Bienvenidos a JOCKEY's Store</h1>
      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default ItemListContainer;
