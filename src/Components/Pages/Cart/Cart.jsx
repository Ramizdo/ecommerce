import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="prueba">
      AQUI SE VERAN LOS PRODUCTOS AGREGADOS AL CARRITO
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
