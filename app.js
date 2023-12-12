const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

const todoRoutes = require("./routes/todo");

// /todo 경로

app.use("/todo", todoRoutes);

app.use("/", (req, res) => {
  res.send({ test: "hello, this is test-thunk server!!!!" });
});
app.listen(5001, () => {
  console.log("server 연결 완료! port 5001");
});
