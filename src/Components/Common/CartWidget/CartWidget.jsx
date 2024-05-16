import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = ({total}) => {

  return (
    <Link to="/cart" className="link">
      <Badge
        badgeContent={total}
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
