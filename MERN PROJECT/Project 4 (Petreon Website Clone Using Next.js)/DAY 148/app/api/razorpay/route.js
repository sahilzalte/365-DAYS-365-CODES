import { NextResponse } from "next/server";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/db/connectDb";
import crypto from "crypto"; // ✅ Added for correct signature verification
import User from "@/app/models/User";

export const POST = async (req) => {
    await connectDB();

    let body = await req.formData();
    body = Object.fromEntries(body); // ✅ Convert formData to object

    // Check if razorpay id is present on the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) {
        return NextResponse.json({ success: false, message: "Order Id not found" });
    }

    // featch the secret of the user who is getting the payment 
    let user = await User.findOne({ username: p.to_user });
    const secret = user.razorpaysecret;

    // ✅ Proper payment verification using crypto
    const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(body.razorpay_order_id + "|" + body.razorpay_payment_id)
        .digest("hex");

    if (expectedSignature === body.razorpay_signature) {
        // ✅ Payment is valid, update the status
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { done: "true" },
            { new: true }
        );

        return NextResponse.redirect(
            `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`
        );
    } else {
        // ❌ Invalid signature
        return NextResponse.json({ success: false, message: "Payment verification failed" });
    }
};
