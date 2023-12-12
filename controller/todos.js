const Todo = require("../models/todos.js");

exports.postAddTodo = (req, res, next) => {
  console.log(req.body.todo);
  const todo = new Todo(req.body.todo);
  todo.save();
  res.status(201).json({
    message: "Post created successfully!",
  });
};

exports.getTodos = (req, res, next) => {
  Todo.fetchAll((todos) => {
    res.status(201).json({ todo: todos });
  });
};
