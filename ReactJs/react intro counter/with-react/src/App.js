import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <h1>{value} </h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
