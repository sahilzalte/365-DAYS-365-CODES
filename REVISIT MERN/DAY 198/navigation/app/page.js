'use client';
import Image from "next/image";
import { useSearchParams } from "next/navigation";
export default function Home() {

  const searchParams = useSearchParams();

  return (
    <>
      <p> hey This is a blog:{searchParams.get(`blog`)}  </p>
      <p>utm source is: {searchParams.get(`utm_source`)}</p>
    </>
  );
}
