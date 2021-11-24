// Crear un componente contador que cuando hagas click en un botón se incremente un contador
// y lo muestre en un titulo (hace falta useState)
//
// 2. Crear un estado de React
// 3. Detectar el click del boton y cambiar este estado
// 4. Utilizar este estado para pintar el titulo

import { useState } from "react";

export function Exercise3() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function addFive() {
    setCount(count + 5);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={addFive}>+5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
