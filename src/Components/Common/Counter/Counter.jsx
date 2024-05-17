import { Button, ButtonGroup } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import "./Counter.css"
import AddIcon from '@mui/icons-material/Add';

const Counter = ({ sumar, restar, contador, onAdd }) => {
  return (
    <div className="botonera">
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={restar}><RemoveIcon /></Button>
        <Button >{contador}</Button>
        <Button onClick={sumar}><AddIcon /></Button>
        {/* <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button> */}
      </ButtonGroup>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>
      </ButtonGroup>
      {/* <Button onClick={restar}>Restar</Button>
      <h2>{contador}</h2>
      <Button onClick={sumar}>Sumar</Button>
      <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button> */}
      
    </div>
  );
};

export default Counter;
