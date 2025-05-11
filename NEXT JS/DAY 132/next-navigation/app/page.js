'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  return (
    <div>
      Hey this is our page and blog is {searchParams.get("blog")} and pathname is {pathname} and blog is {blog} and utm source is{searchParams.get("utm_source")}
    </div>
  );
}
