import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  const {addToCart, getQuantityById} = useContext(CartContext)

  let initialValue = getQuantityById(+id)

  useEffect(() => {
    let productoEncontrado = products.find((product) => product.id === +id);
    const getProducts = new Promise((resolve, reject) => {
      if (productoEncontrado === undefined) {
        reject(error);
      } else {
        resolve(productoEncontrado);
      }
    });

    getProducts.then((res) => setItem(res));
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, quantity: cantidad };

    addToCart(product)
  };

  return <ItemDetail item={item} onAdd={onAdd} initialValue={initialValue}/>;
};

export default ItemDetailContainer;
