import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="link">
      <Badge
        badgeContent={1}
        color="secondary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
};

export default CartWidget;
