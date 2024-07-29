"use client"

import { submitAction } from "@/acitons/form";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (

    <form className="p-10" ref={ref} action={(e) => { submitAction(e); ref.current.reset() }}>
      <div className="flex  my-4 justify-center gap-4">
        <label className="font-bold" htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" className="bg-slate-700 text-white px-2" placeholder="Enter Your Name" />
      </div>
      <div className="flex my-4 justify-center gap-4">
        <label className="font-bold" htmlFor="add">Addresss: </label>
        <input type="text" name="add" id="add" className="bg-slate-700 text-white px-2" placeholder="Enter Your Address" />
      </div>
      <div className="flex justify-center my-4 gap-4" >
        <button className="bg-green-500 p-2 px-2  border rounded">Submit</button>
      </div>

    </form>
  );
}
