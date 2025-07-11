import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-4 py-8">
      <Image className="mx-auto" width={500} height={500} src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_960_720.jpg" alt="" />
    </div>
  );
}
