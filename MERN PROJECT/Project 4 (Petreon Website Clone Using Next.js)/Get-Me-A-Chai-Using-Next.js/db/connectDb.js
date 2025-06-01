import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
            useNewUrlParser: true,
        });

    } catch (error) {

        process.exit(1);
    }
}
export default connectDB