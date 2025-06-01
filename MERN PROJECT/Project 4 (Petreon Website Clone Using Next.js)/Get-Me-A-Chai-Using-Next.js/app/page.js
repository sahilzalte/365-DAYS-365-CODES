
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-white min-h-[44vh]  px-5 md:px-0 text-xs md:text-base">
        <div className='font-bold md:text-5xl flex gap-2 md:gap-20 justify-center items-center text-3xl'>Buy Me a Chai <span> <img className='inverImg' src="tea.gif" width={88} alt="Tea GIF" /></span> </div>
        <p className='text-center md:text-left'>
          See our projects and support us by buying a chai! Explore what we've built and join our community.
        </p>
        <p className='text-center md:text-left'>
          Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a chai.
        </p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>

          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>



      <div className='text-white container mx-auto pb-32  px-10'>
        <h1 className='text-3xl font-bold text-center mb-14'>Your Fans can buy you a Chai</h1>
        <div className='flex gap-5 justify-around'>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src="man.gif" alt="man gif" />
            <p className='font-bold text-center'>Fans want to help</p>
            <p className='text-center'>Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src="coin.gif" alt="coin gif" />
            <p className='font-bold text-center'>Fans want to help</p>
            <p className='text-center'>Your fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className='bg-slate-400 rounded-full p-2 text-black' width={88} src="group.gif" alt="group gif" />
            <p className='font-bold text-center'>Fans want to help</p>
            <p className='text-center'>Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className='text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-bold text-center mb-14'>Learn More About us</h2>
        {/* Responsive Youtube Ambed*/}

        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/I1J2Z_Fgado?si=R33ip_PRI7blpYbk" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> </iframe>
        </div>
        {/* <iframe
        
          src="https://www.youtube.com/embed/I1J2Z_Fgado?si=R33ip_PRI7blpYbk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe> */}
      </div >
    </>
  )
}

export default page
