import "./App.css";
import Navbar from "../componets/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="">
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is : {count}
        <button onClick={() => dispatch(increment())}> +</button>
      </div>
    </>
  );
}

export default App;
