import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    cartItems: {
        type: Object,
        default: {}
    }
}, { minimize: false, timestamps: true });
const User = mongoose.models.User || mongoose.model("user", userSchema);
export default User;