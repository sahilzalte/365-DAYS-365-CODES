'use server'

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/app/models/User"
import PaymentPage from "@/components/PaymentPage"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",

    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })
    
    return x
}