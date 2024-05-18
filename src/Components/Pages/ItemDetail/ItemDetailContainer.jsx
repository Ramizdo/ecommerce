import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import ItemDetail from "./ItemDetail";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";


const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const {addToCart, getQuantityById} = useContext(CartContext)

  let initialValue = getQuantityById(+id)

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let referenciaDocumento = doc(productsCollection, id);
    getDoc(referenciaDocumento).then((respuesta) => {
      setItem({ id: respuesta.id, ...respuesta.data() });
    });
    }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };

    addToCart(product)

    Swal.fire({
      position: "center",
      icon: "success",
      iconColor: "#e63d97",
      title: "Agregado con exito",
      showConfirmButton: false,
      timer: 2500,
    });

  };

  return <ItemDetail item={item} onAdd={onAdd} initialValue={initialValue}/>;
};

export default ItemDetailContainer;
