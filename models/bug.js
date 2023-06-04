const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    bugAuther: {
      type: String,
      default: "",
    },
    bugDisc: {
      type: String,
      default: "",
    },
    bug: [
      {
        type: String,
        default: "",
      },
    ],
    bugLevel: [
      {
        type: String,
        enum: ["easy", "medium", "hard"],
        default: "easy",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model("Bug", bugSchema);
module.exports = Bug;
