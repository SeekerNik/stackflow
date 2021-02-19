const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", (req, res, data) => {
  const username = req.body.name;
  const password = req.body.password;

  if (username === "nik") {
    if (password === "nik") {
      res.send("Work in Progress");
      res.end();
    }
  }
  res.end("Error occured");
});
app.listen(5000, (req, res) => {
  console.log("the server is running at port 5000");
});
