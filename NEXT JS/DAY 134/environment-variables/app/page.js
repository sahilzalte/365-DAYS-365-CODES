import Image from "next/image";

export default function Home() {
  // console.log("This id is: ", process.env.ID)
  // console.log("This Secret is: ", process.env.SECRET)
  return (

    <div>
      Hey this is home
      The id is: {process.env.NEXT_PUBLIC_ID} and the secret is: {process.env.SECRET}
      The name is {process.env.name}
    </div>
  );
}
