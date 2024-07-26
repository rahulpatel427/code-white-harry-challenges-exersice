import React from "react";
import { memo } from "react";
function Navbar({ adjective, getAdjective }) {
  console.log("navbar is rendering...");
  return (
    <div>
      i'm a Navbar{adjective}
      <button
        onClick={() => {
          setCount();
        }}
      >
        {getAdjective()}
      </button>
    </div>
  );
}

export default memo(Navbar);
