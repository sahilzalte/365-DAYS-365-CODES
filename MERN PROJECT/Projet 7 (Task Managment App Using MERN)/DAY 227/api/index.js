import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import TaskRouter from './Routes/Task.route.js';


dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

// Importing Task routes

app.use('/api/task',TaskRouter)


mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
}); 


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});