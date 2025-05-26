'use server'

import Razorpay from "razorpay"
import Payment from "@/app/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/app/models/User"
import PaymentPage from "@/components/PaymentPage"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    let instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET });


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",

    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayment = async (username) => {
    await connectDB()
    //  Find all payments sorted by decresing order of amount and flattern object ids
    let p = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    // If the username is being updated , check if username is available
    if (oldusername !== ndata.username) {

        let u = await User.findOne({ username: ndata.username })
        if (u) {
            throw new Error("Username already exists")
        }
    }

    await User.updateOne({ email: ndata.email }, ndata)

}