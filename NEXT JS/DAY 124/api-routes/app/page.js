'use client'
import Image from "next/image";

export default function Home() {

  const HandleClick = async () => {
    let data = {
      name:"Sahil",
      role:'Coder'

    }
    const a = await fetch("/api/add",{method:"POST"
      ,headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });
    const res = await a.json();
    console.log(res);
  };
  return (
    <div>
      <h1>Next.js api routes demo</h1>
      <button onClick={HandleClick}>Click me</button>
    </div>
  );
}
