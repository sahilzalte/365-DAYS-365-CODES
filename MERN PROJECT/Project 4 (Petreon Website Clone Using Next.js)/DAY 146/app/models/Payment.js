import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const PaymentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    to_user: {
        type: String,
        required: true,
    },
    oid: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
});

// ✅ Ensure 'Payment' model is defined only once
export default models.Payment || model("Payment", PaymentSchema);
