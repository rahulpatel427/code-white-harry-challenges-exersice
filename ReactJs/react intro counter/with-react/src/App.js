
import { useState } from "react";
import Navbar from './Componets/Navbar';
import Footer from "./Componets/Footer";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>

      <Navbar />

      <div className="App">
        <h1>{value} </h1>
        <button
          onClick={() => {
            setValue(value + 1);
          }}>
          Click Me
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
