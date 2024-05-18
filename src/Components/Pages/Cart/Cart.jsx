// import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  Box,
  ButtonGroup,
  Button,
  CardMedia,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = ({ cart, clearCart, deleteCartById, total }) => {
  return (
    <div>
      <h1 className="titulo">Carrito:</h1>
      <Box className="box-table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="row-color">
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <h4 className="texto-table">Producto:</h4>
                </TableCell>
                <TableCell align="center">
                  <h4 className="texto-table">Cantidad</h4>
                </TableCell>
                <TableCell align="center">
                  <h4 className="texto-table">Precio</h4>
                </TableCell>
                <TableCell align="center">
                  <h4 className="texto-table">Subtotal</h4>
                </TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow
                  key={product.id}
                >
                  <TableCell
                    className="cell-container"
                    component="th"
                    scope="row"
                  >
                    <CardMedia
                      className="cardMedia__cart"
                      image={product.img}
                      title={product.title}
                    />
                  </TableCell>
                  <TableCell align="center">{product.title}</TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">
                    {product.price * product.quantity}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => deleteCartById(product.id)}
                      variant="contained"
                      color="error"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {cart.length > 0 && (
        <>
          <Typography className="sub-titulo" variant="h5">El total a pagar es: ${total}</Typography>

          <div className="botoneraEnCarrito">
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button onClick={clearCart}>Vaciar carrito</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Link to="/checkout">
                <Button variant="contained">Ir a pagar</Button>
              </Link>
            </ButtonGroup>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
