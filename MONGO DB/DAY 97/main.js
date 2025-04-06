const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Schema & Model
const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean,
});

const Employee = mongoose.model("Employee", employeeSchema);

// Route to Generate Dummy Data
app.post("/generate-data", async (req, res) => {
    try {
        // Clear Existing Data
        await Employee.deleteMany();

        // Dummy Data
        const dummyData = [
            { name: "Sahil", salary: 45000000, language: "Python", city: "New York", isManager: true },
            { name: "Alice", salary: 6000000, language: "JavaScript", city: "Los Angeles", isManager: false },
            { name: "Bob", salary: 7000000, language: "Java", city: "Chicago", isManager: true },
            { name: "Charlie", salary: 5500000, language: "C++", city: "San Francisco", isManager: false },
            { name: "David", salary: 8000000, language: "Go", city: "Seattle", isManager: true },
            { name: "Eve", salary: 5000000, language: "Ruby", city: "Boston", isManager: false },
            { name: "Frank", salary: 9000000, language: "Swift", city: "Austin", isManager: true },
            { name: "Grace", salary: 6500000, language: "PHP", city: "Houston", isManager: false },
            { name: "Hank", salary: 7500000, language: "Rust", city: "Denver", isManager: true },
            { name: "Ivy", salary: 8500000, language: "Kotlin", city: "Miami", isManager: false },
        ];

        // Insert Data
        await Employee.insertMany(dummyData);

        res.json({ message: "Dummy data generated successfully!", data: dummyData });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong!" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
