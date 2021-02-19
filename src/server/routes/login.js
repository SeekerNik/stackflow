const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send("<h1>this is login Page<h1>");
});
