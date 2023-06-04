const BugModel = require("../models/bug");

module.exports = {
  create: async (req, res) => {
    console.log("sothing");
    console.log(req.header.token);
    try {
      console.log(req.body);

      let data = await BugModel.create({
        title: req.body.title,
        project: req.header.token,
        bugAuther: req.body.bugAuther,
        bugDisc: req.body.bugDisc,
      });

      let bugName = req.body.bug;
      let bugLevel = req.body.bugLevel;

      if (bugName.length > 5) {
        data.bug.push(bugName);
        data.bugLevel.push(bugLevel);
      } else {
        for (let i = 0; i < bugName.length; i++) {
          data.bug.push(bugName[i]);
          if (bugLevel[i] == undefined) {
            data.bugLevel.push("easy");
          } else {
            data.bugLevel.push(bugLevel[i]);
          }
        }
      }

      data.save();
      // console.log("saved data; ", data);

      return res.status(201).redirect("back");
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  },

  getByFilter: async (req, res) => {
    try {
      console.log(req.header.token);
      let data = await BugModel.find();
      console.log(data.length);

      if (req.body.bugAuther == "") {
        data.find({
          bug: { $elemMatch: { $eq: req.body.bug } },
        });
        // return res.redirect("back");
      } else {
        data = data.find({
          bugAuther: { $eq: req.body.bugAuther } && {
            bug: { $elemMatch: { $eq: req.body.bug } },
          },
        });
      }

      data.save();

      console.log(data);

      return res.status(200).json({
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  },
};
