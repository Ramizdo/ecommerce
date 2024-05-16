import { Button } from "@mui/material"

const Counter = ({sumar, restar, contador, onAdd}) => {
  return (
    <div>
        <Button onClick={restar}>Restar</Button>
        <h2>{contador}</h2>
        <Button onClick={sumar}>Sumar</Button>
        <Button onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
    </div>
  )
}

export default Counter