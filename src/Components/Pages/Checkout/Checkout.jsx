// import { Button } from "@mui/base";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Checkout.css";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let objeto = {
      buyer: info,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, objeto)
      .then((respuesta) => setOrderId(respuesta.id))
      .catch((error) => console.log(error));

    cart.forEach((product) => {
      let referenciaDocumento = doc(db, "products", product.id);
      updateDoc(referenciaDocumento, {
        stock: product.stock - product.quantity,
      });
    });

    clearCart();
  };

  return (
    <>
      <div>
        <h1 className="titulo">Finalizar compra:</h1>
        <Typography className="sub-titulo" variant="h5">
          Ingresa tus datos para poder generar tu pedido
        </Typography>

        <div className="prueba">
          {orderId ? (
            <h1>su id es: {orderId} </h1>
          ) : (
            <Box
              className="prueba"
              component="form"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre"
                variant="outlined"
                type="text"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                id="apellido"
                name="apellido"
                label="Apellido"
                variant="outlined"
                type="text"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                id="telefono"
                name="telefono"
                label="Telefono"
                variant="outlined"
                type="tel"
                fullWidth
                onChange={handleChange}
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                onChange={handleChange}
              />

              <Button type="submit" variant="contained">
                enviar
              </Button>
            </Box>
          )}
        </div>
      </div>
    </>
  );
};
