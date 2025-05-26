import mongoose from "mongoose"
import Razorpay from "razorpay"

const { Schema, model } = mongoose

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
    },
    coverpic: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    razorpayid: {
        type: String
    },
    razorpaysecret: {
        type: String
    }
})


export default mongoose.models.User || model("User", UserSchema)