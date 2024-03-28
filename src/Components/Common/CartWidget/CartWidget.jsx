import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";

const CartWidget = () => {
  return (
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
  );
};

export default CartWidget;
