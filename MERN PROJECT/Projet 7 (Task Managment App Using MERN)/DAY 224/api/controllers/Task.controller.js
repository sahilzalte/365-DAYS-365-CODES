import TaskModel from "../models/Task.model.js";

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new TaskModel({
            title,
            description
        })

        await newTask.save();

        res.status(200).json({
            status: true,
            message: "Task created successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed to create task",
        });
    }
}
export const getAllTask = async (req, res) => {
    try {
        const taskData = await TaskModel.find().sort({ createdAt: -1 }).lean().exec()
        res.status(200).json({
            status: true,
            message: "Tasks retrieved successfully",
            taskData
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Failed retrieved task",
        });
    }
}
export const showTask = async (req, res) => { }
export const updateTask = async (req, res) => { }
export const deleteTask = async (req, res) => { }