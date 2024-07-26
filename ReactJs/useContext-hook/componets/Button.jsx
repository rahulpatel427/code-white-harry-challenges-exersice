import React, { useContext } from "react";
import { counterContext } from "../context/context";

function Button() {
  const counter = useContext(counterContext);
  return (
    <div>
      <button>{counter}</button>
    </div>
  );
}

export default Button;
