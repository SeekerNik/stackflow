const express = require("express");

const app = express();
const login = require("./routes/login");
app.use("/login", login);

app.get("/hello", (req, res) => {
  res.send("<h1>hello world<h1>");
});

app.listen(5000, (req, res) => {
  console.log("the server is running at port 5000");
});
