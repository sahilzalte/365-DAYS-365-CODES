import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link';

// Poppins-ExtraBold.ttf
const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


const page = () => {
  return (
    <main className='bg-purple-100'>
      <section className='grid grid-cols-2 h-[50vh]'>
        <div className=' flex flex-col gap-4 items-center justify-center'>
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL Shortener in My App
          </p>
          <p className="px-56 text-center">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>Try Now</button></Link>
            <Link href='https://github.com/Sahilzalte' target='_blank'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white cursor-pointer'>Github</button></Link>
          </div>
        </div>
        <div className='flex justify-start relative'>
          <Image className='mix-blend-darken' alt='an Image of a vector' src={'/Vector.jpg'} fill={true} />

        </div>
      </section>
    </main>
  )
}

export default page
