import React, { useEffect } from "react";

function Navbar({ color }) {
  useEffect(() => {
    alert("Color Was Changed");
  }, [color]);
  return <div>I am a Navbar {color} color he he he...</div>;
}

export default Navbar;
