import { Button } from "@mui/base";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import "./Checkout.css";

export const Checkout = () => {
  const [info, setInfo] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return ( 
    <>
    <div className="prueba">
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
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
        <Button type="submit" variant="contained">
          enviar
        </Button>
      </form>
    </div>
    </>
  );
};
