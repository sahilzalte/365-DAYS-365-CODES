import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-emerald-800  text-white'>
            <div className="mycontainer flex justify-between items-center py-5 px-4 h-14 w-full">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-emerald-500'>&lt;</span>
                    Pass
                    <span className='text-emerald-500'>OP/&gt;</span>


                </div>
                <div>
                    <a
                        href="https://github.com/sahilzalte"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='text-white bg-emerald-700 my-5 rounded-full flex justify-between items-center ring-white ring-1 cursor-pointer px-3 py-2'>
                            <img className='invert w-6 h-6 mr-2' src="/github.svg" alt="GitHub logo" />
                            <span className='font-bold'>GitHub</span>
                        </button>
                    </a>
                </div>

            </div>
        </nav>
    )
}

export default Navbar