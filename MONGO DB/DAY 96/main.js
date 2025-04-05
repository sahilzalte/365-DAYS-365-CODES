import mongoose from "mongoose"
import express from "express"
import { Todo } from "./models/todo.js"



let conn = await mongoose.connect("mongodb://localhost:27017/todo")

// Express Hello World

const app = express()
const port = 3000

app.get("/", (req, res) => {
    const todo = new Todo({
        name: "Hey first todo",
        desc: "Description of this todo",
        isDone: false,
        Days: Math.floor(Math.random() * 45 + 5 * Math.random())
    })
    todo.save()
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})