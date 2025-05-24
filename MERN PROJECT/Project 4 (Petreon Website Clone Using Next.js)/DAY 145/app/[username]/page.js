import React from 'react'
const username = ({ params }) => {
    return (
        <>
            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-[350px]' src="https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif" alt="" />
                <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={150} height={150} src="https://avatars.githubusercontent.com/u/168976132?v=4" alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-24 flex-col gap-2">
                <div className="font-bold text-lg ">

                    @{params.username}
                </div>
                <div className="text-slate-400">
                    Creating Animated art for VTT's
                </div>
                <div className="text-slate-400">
                    9,719 members . 82 posts. $15,450/release
                </div>
                <div className="payment flex gap-3 w-[80%] mt-11">
                    <div className="supporters w-1/2 bg-slate-500 rounded-lg text-white p-10">
                        {/* show list of all the supporters as a leaderboard */}
                        <h2 className='text-2xl tefxt-center font-bold my-5'>Supporters</h2>
                        <ul className='my-4 text-lg'>
                            <li  className="my-2 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="User Avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I Support you Gem. Lots of ❤️"
                                </span>
                            </li>

                            <li  className="my-2 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="User Avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I Support you Gem. Lots of ❤️"
                                </span>
                            </li>

                            <li  className="my-2 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="User Avatar" />
                                <span>
                                Shubham donated <span className='font-bold'>$30</span> with a message "I Support you Gem. Lots of ❤️"
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-500 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className="flex gap-2 flex-col">
                            {/* Input for name and message */}
                            <div>
                                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>

                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />

                            {/* Input for amount */}
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />

                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Pay</button>



                        </div>
                        {/* Or Choose from this amount */}
                        <div className="flex gap-2 mt-5">
                            <div className="bg-slate-800 p-3 rounded-lg">Pay $10</div>
                            <div className="bg-slate-800 p-3 rounded-lg">Pay $20</div>
                            <div className="bg-slate-800 p-3 rounded-lg">Pay $30</div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default username