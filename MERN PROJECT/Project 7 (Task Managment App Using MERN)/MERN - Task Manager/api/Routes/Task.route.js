import express from "express"
import { createTask, deleteTask, getAllTask, showTask, updateTask } from "../controllers/Task.controller.js"

const TaskRouter = express.Router()

TaskRouter.post('/create-task', createTask)
TaskRouter.get('/get-all-task', getAllTask)
TaskRouter.get('/show-task/:taskid', showTask)
TaskRouter.put('/update-task/:taskid', updateTask)
TaskRouter.delete('/delete-task/:taskid', deleteTask)

export default TaskRouter