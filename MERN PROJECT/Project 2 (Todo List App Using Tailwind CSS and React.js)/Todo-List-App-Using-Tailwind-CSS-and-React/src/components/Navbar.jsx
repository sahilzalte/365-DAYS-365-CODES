import React from 'react'

const Navbar = () => {
    const handleHomeClick = () => {
        window.location.reload();
    };

    return (
        <nav className='flex items-center bg-slate-700 text-white py-0 sticky top-0  md:px-0 px-2 z-10'>
            {/* Left logo */}
            <div className="logo px-4 flex items-center">
                <span className='font-bold text-xl'>iTask</span>
            </div>

            {/* Center favicon */}
            <div id='1' className="flex-grow flex justify-center md:object-contain relative md:left-[45px]"> 
                <img
                    src="/favicon.ico"
                    alt="favicon"
                    className="h-30 w-50 object-contain"
                />
            </div>

            {/* Right menu */}
            <ul className="flex gap-8 px-4 items-center">
                <li
                    className='cursor-pointer hover:font-bold transition-all hidden sm:block'
                    onClick={handleHomeClick}
                >
                    Home
                </li>

                <a
                    href="https://contact-websites.vercel.app/todoapp.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className='cursor-pointer hover:font-bold transition-all'>
                        Feedback
                    </li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar