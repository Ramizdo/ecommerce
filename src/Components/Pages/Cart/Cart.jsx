import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  Box,
  CardMedia,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
                <TableCell>
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
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.title}
                    <CardMedia
                      className="cardMedia__cart"
                      component="img"
                      image={product.img}
                      title={product.title}
                    />
                  </TableCell>
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

      {/* {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteCartById(product.id)}>Eliminar</button>
        </div>
      ))} */}

      {cart.length > 0 && (
        <>
          <h4>El total a pagar es {total}</h4>
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
