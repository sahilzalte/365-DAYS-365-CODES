import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
export default connectDB