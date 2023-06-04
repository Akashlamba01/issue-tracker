const mongosse = require("mongoose");

mongosse
  .connect("mongodb://127.0.0.1:27017/issue-tracker")
  .then(() => {
    console.log("db conected");
  })
  .catch((e) => {
    console.log(e, "not connected");
  });
