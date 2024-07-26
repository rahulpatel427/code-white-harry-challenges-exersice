import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);
  return <div>i'm a navbar & Counter is : {count}</div>;
}

export default Navbar;
