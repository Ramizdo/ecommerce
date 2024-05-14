import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({ stock, initialValue = 1, onAdd }) => {
  const [contador, setContador] = useState(initialValue);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("Stock Maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No puedes bajar a menos de 1");
    }
  };

  let objectProps = {
    sumar,
    restar,
    contador,
    onAdd,
  };
  return <Counter {...objectProps} />;
};
