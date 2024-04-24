import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  
  const [item, setItem] = useState({});

  useEffect(() => {
    let productoEncontrado = products.find((product) => product.id === +id)
    const getProducts = new Promise( (resolve, reject) => {
        if (productoEncontrado === undefined) {
      reject(error);
        } else {
      resolve(productoEncontrado)
        }
    })

    getProducts.then((res) => setItem(res))
  }, [id])

  return <ItemDetail item={item} />
};

export default ItemDetailContainer;
