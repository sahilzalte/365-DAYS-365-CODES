import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className=" flex justify-center flex-col ml-[10vw] gap-4">
          <p className="text-yellow-300 font-bold text-7xl ">Everything you</p>
          <p className="text-yellow-300 font-bold text-7xl ">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl ">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2">
            <input className="bg-white px-2 py-2 focus:outline-green-800 rounded-md" type="text" placeholder="linktr.ee/your-url" />
            <button className="bg-pink-300 rounded-full px-4 py-5 font-semibold">Claim your Bittree</button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="homepageimg" />
        </div>
      </section>
      <section className="bg-red-500 min-h-[100vh]">

      </section>
    </main>
  );
}