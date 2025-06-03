import React from 'react'

const Footer = () => {
    return (
        <div className='bg-emerald-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-emerald-500'>&lt;</span>
                Pass
                <span className='text-emerald-500'>OP/&gt;</span>


            </div>
            <div className='flex justify-center items-center font-bold'>
                Created with <img className='w-10 mx-2' src="heart.png" alt="" /> by Sahil
            </div>
        </div>
    )
}

export default Footer