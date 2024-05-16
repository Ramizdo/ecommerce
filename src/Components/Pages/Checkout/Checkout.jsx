import { Button } from "@mui/base";
import { InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Checkout.css";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export const Checkout = () => {

    const {cart, getTotalPrice, clearCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    let total = getTotalPrice()

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(info)
    let objeto = {
        buyer: info,
        items: cart,
        total
    }

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, objeto)
      .then((respuesta) => setOrderId(respuesta.id))
      .catch((error) => console.log(error));

    // update de todos los productos que compramos
    // let productsCollection = collection(db, "products")

    cart.forEach((product) => {
      let referenciaDocumento = doc(db, "products", product.id);
      updateDoc(referenciaDocumento, { stock: product.stock - product.quantity });
    });

    clearCart();

  };

  return ( 
    <>
    <div className="prueba">
    {orderId ? (
        <h1>su id es: {orderId} </h1>
      ) : (
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          type="text"
          label="Nombre"
          onChange={handleChange}
          name="nombre"
        />
        <TextField
          variant="outlined"
          type="text"
          label="Telefono"
          onChange={handleChange}
          name="telefono"
        />
        <TextField
          variant="outlined"
          type="text"
          label="Email"
          onChange={handleChange}
          name="email"
        />
        {/* <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        /> */}
        <Button type="submit" variant="contained">
          enviar
        </Button>
      </form>
      )}
    </div>
    </>
  );
};
