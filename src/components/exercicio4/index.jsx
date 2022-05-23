import React, { useState } from "react";
import "./exercicio4.css";
function Exercicio4() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="title">Exercicio4</h1>
      <div className="exercicio4__div">
        <p>{count}</p>
        <button onClick={increment}>Click Me</button>
      </div>
    </div>
  );
}

export default Exercicio4;
