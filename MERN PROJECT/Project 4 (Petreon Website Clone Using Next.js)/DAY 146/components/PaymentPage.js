'use client'
import React from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useraction'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    // const { data: session } = useSession()
    const [paymentform, setpaymentform] = useState({})

    // HandleChange Function

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const pay = async (amount) => {
        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": process.env.KEY_ID,
            "amount": amount,
            "currency": "INR",
            "name": "Get Me A Chai",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>
            <button id="rzp-button1">Pay</button>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-[350px]' src="https://i.pinimg.com/originals/34/1e/80/341e800b1f29d3e34ea2eba5a6af205c.gif" alt="" />
                <div className='absolute -bottom-20 right-[46%] border-white border-2 rounded-full'>
                    <img className='rounded-full' width={150} height={150} src="https://avatars.githubusercontent.com/u/168976132?v=4" alt="" />
                </div>
            </div>

            <div className="info flex justify-center items-center my-24 flex-col gap-2">
                <div className="font-bold text-lg ">
                    @{username}
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
                            <li className="my-2 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="User Avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "I Support you Gem. Lots of ❤️"
                                </span>
                            </li>

                            <li className="my-2 flex gap-2 items-center">
                                <img width={33} src="avatar.gif" alt="User Avatar" />
                                <span>
                                    Shubham donated <span className='font-bold'>$30</span> with a message "I Support you Gem. Lots of ❤️"
                                </span>
                            </li>

                            <li className="my-2 flex gap-2 items-center">
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
                                <input onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800' value={paymentform.name} name='name' placeholder='Enter Name' />
                            </div>

                            <input onChange={handleChange} type="text" className='w-full p-3 rounded-lg bg-slate-800' value={paymentform.message} name='message' placeholder='Enter Message' />
                            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' value={paymentform.amount} name='amount' placeholder='Enter Amount' />

                            <button onChange={handleChange} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
                                Pay
                            </button>
                        </div>

                        {/* Or Choose from this amount */}
                        <div className="flex gap-2 mt-5">
                            <div className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(1000)}>Pay ₹10</div>
                            <div className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(2000)}>Pay ₹20</div>
                            <div className="bg-slate-800 p-3 rounded-lg cursor-pointer" onClick={() => pay(3000)}>Pay ₹30</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage