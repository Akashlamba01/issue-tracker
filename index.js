const express = require("express");
require("./config/db");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("assets"));

app.get("/", (req, res) => {
  return res.render("index");
});

app.use("/", require("./router"));

app.use(errors());

app.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
});
