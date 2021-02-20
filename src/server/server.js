const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  console.log(username, password);
  if (username === "nik") {
    if (password === "nik") {
      res.send("Success");
      res.end();
    }
  }
  res.send("Failure");
  res.end();
});

app.listen(5000, (req, res) => {
  console.log("the server is running at port 5000");
});
