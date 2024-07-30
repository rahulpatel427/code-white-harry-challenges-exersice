import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import Manager from "./componets/Manager";
import Footer from "./componets/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-[84vh]">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
