// 'use client';
import Image from "next/image";

export default function Home() { 
  // console.log(process.env.SAHIL);
  // console.log(process.env.ID);
  
  return (
    <div>
the id is {process.env.NEXT_PUBLIC_ID} and the sahil is {process.env.NEXT_PUBLIC_SAHIL}
    </div>
  );
}
