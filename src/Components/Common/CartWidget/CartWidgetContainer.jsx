import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import CartWidget from "./CartWidget";

const CartWidgetContainer = () => {

  const { getTotalItems } = useContext(CartContext);

  let total = getTotalItems()

  return <CartWidget total={total} />;
};

export default CartWidgetContainer;
