import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-2xl">
                <Link href='/'>UShort</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link href='/about'><li>About</li></Link>
                <Link href='/shorten'><li>Shorten</li></Link>
                <Link href='https://contact-websites.vercel.app/urlShortner.html' target='_blank'><li>Contact</li></Link>
                <li className='flex gap-3'>
                    <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>Try Now</button></Link>
                    <Link href='https://github.com/Sahilzalte' target='_blank'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
