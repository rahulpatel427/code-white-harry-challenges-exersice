import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo ">Facebook</div>
        <ul className={`flex gap-9`}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact"><li>Contact Us</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
