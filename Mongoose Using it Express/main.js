import mongoose from "mongoose";
import express from "express";
import { Todo } from "./model/Todo.js"; // Ensure the path is correct

let connection = await mongoose.connect("mongodb://localhost:27017/todo");
console.log("Connected to MongoDB");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {
  const todo = new Todo({ title: "im title", desc: "im desc", isDone: false })
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
