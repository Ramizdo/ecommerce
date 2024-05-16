import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { CircularProgress, Skeleton, Stack } from "@mui/material";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { products } from "../../../productsMock";


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

  // const addDocsProducts = () => {
  //   let productsCollection = collection(db, "products")
  //   products.forEach((product) => addDoc(productsCollection, product))
  // }

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

  return (
  <>
  <h1>Bienvenidos</h1>
{items.length > 0 ? (
  <ItemList items={items} error={error} />
) : (
<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
<CircularProgress color="secondary" />
</Stack>
)}
{/* <button onClick={addDocsProducts}>Agregar</button> */}
  </>
  )
};

export default ItemListContainer;
