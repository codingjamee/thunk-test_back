const path = require("path");
const express = require("express");

const todosController = require("../controller/todos");

const router = express.Router();

router.get("/", todosController.getTodos);
router.post("/", todosController.postAddTodo);

module.exports = router;
