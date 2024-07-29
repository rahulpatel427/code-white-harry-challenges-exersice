"use client"
import Image from "next/image";

export default function Home() {

  const handleClick = async () => {
    let data = {
      name: "rahul",
      role: "Coder",
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (

    <div className="text-xl font-bold">
      <h1>Next.js Api  routes demo.</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
