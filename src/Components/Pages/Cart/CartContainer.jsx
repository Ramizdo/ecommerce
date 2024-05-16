import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Cart from "./Cart";

const CartContainer = () => {

const {cart, clearCart, deleteCartById, getTotalPrice} = useContext(CartContext)

let total = getTotalPrice()

  return <Cart cart={cart} clearCart={clearCart} deleteCartById={deleteCartById} total={total}/>;
};

export default CartContainer;
