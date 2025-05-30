import React from 'react'

const Generate = () => {
    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col text-gray-900">
                <div className="flex flex-col gap-5 my-8">
                    <h1 className='font-bold text-4xl'>Create your Bittree</h1>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 1: Claim your Handle</h2>
                        <div className="mx-4">
                            <input className='bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-r-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
                        <div className="mx-4">
                            <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-r-full' type="text" placeholder='Enter link text' />
                            <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-r-full' type="text" placeholder='Enter link' />
                            <button className='py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl p-5'>Add link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className="font-semibold text-2xl">Step 3: Add picture and Finalize</h2>
                        <div className="mx-4 flex flex-col">
                            <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-r-full' type="text" placeholder='Add link to your Picture' />
                            <button className='py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl p-5'>Create Your Bitlink</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#E9C0E9]">
                <img className='h-full object-contain' src="/generate.png" alt="generatepng" />
            </div>
        </div>
    )
}

export default Generate