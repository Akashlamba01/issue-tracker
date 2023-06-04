const mongosse = require("mongoose");
const env = require("dotenv").config();

mongosse
  // .connect("mongodb://127.0.0.1:27017/issue-tracker")
  .connect(
    `mongodb+srv://issue-tracker:${process.env.DB_KEY}@cluster0.7jjb7bp.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("db conected");
  })
  .catch((e) => {
    console.log(e, "not connected");
  });
