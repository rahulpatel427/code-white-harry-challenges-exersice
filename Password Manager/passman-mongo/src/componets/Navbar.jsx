import React from "react";

function Navbar() {
  return (
    <nav className="  bg-slate-800  text-white ">
      <div className="myconatainer flex justify-between items-center  px-4 py-5 h-14  ">
        <div className="logo   font-bold text-2xl">
          <span className="text-green-700 font-bold">&lt;</span>
          Pass
          <span className="text-green-700 font-bold">Man/ &gt;</span>
        </div>
        {/* <ul>
          <li className=" flex gap-3">
            <a className="hover:font-bold transition-all " href="/">
              Home
            </a>
            <a className="hover:font-bold transition-all " href="/">
              About
            </a>
            <a className="hover:font-bold transition-all " href="/">
              Conatct
            </a>
          </li>
        </ul>
         width: 56px;
    display: flex;
    justify-content: center;
    align-items: center; */}
        <button className="flex w-12 glow-on-hover bg-green-800    rounded-full justify-center items-center font-bold text-white">
          <img className="w-12" src="/icons/gitHub.png" alt="" />
          GitHub
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
