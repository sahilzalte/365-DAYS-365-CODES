import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
import User from '../models/User'


const username = async ({ params }) => {

    // If the user is not present in the database, show a 404 not page
    const checkUser = async () => {
        await connectDB()
        let u = await User.findOne({ username: params.username })
        if (!u) {
            return notFound()
        }
    }
    await checkUser()
    return (
        <>

            <PaymentPage username={params.username} />
        </>
    )
}


export default username


export async function generateMetadata({ params }) {
    return {
        title: `Support ${params.username} - Get me A Chai`,
        description: `Make a payment to ${params.username} on Get me A Chai`
    }
}