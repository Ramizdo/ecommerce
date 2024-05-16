import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({cart, clearCart, deleteCartById, total}) => {
  return (
    <div className="prueba">
      <h1>AQUI SE VERAN LOS PRODUCTOS AGREGADOS AL CARRITO</h1>
      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteCartById(product.id) }>Eliminar</button>
        </div>
      ))}



      {cart.length > 0 && (
        <>
        <h2>El total a pagar es {total}</h2>
      <Button onClick={clearCart} variant="outlined">
        Limpiar carrito
      </Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
      </>
      )}
    </div>
  );
};

export default Cart;
