const Todo = require("../models/todos.js");
const ulid = require("ulidx").ulid;

exports.postAddTodo = (req, res, next) => {
  const todoId = ulid();
  console.log(req.body.todo);
  const todo = new Todo(todoId, req.body.todo);
  todo.save();
  res.status(201).json({
    message: "Post created successfully!",
  });
};

exports.getTodos = (req, res, next) => {
  Todo.fetchAll((todos) => {
    res.status(200).json({ todo: todos });
  });
};
