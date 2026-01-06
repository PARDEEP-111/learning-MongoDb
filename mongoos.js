import mongoose from "mongoose";
import express from "express"
import {Todo} from "./models/ToDo.js"
import { title } from "process";
let conn = await mongoose.connect("mongodb://localhost:27017/Todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title:"hey first todo", desc: "about first todo", isDone: false})
    todo.save()
    res.send("hello world")
})
app.get('/a', async (req,res)=>{
    let todo =  await Todo.findOne({})
        console.log(todo)
        res.json({title: todo.title,desc: todo.desc})
    
})
app.listen(port, () => {
    console.log(`Example  app listening on ${port}`);

}) 