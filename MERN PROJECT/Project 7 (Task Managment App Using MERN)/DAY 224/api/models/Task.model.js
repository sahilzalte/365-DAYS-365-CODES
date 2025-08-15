import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
        enum: ['Pending', 'Running', 'Completed', 'Failed'],
    }
}, { timestamps: true })

const TaskModel = new mongoose.model('Task', taskSchema, 'Tasks');
export default TaskModel;