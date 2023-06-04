const BugModel = require("../models/bug");

module.exports = {
  create: async (req, res) => {
    console.log("sothing");
    try {
      console.log(req.body);

      let data = await BugModel.create({
        title: req.body.title,
        bugAuther: req.body.bugAuther,
        bugDisc: req.body.bugDisc,
      });

      let bugName = req.body.bug;
      let bugLevel = req.body.bugLevel;

      // let arrBug = [];
      // let arrLevel = [];

      // arrBug = bugName;

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

      // let arrBug = []
      // arrBug.push(bugName);
      // arrLevel.push(bugLevel);

      // console.log("bug name: ", arrBug);
      // console.log("bug level: ", arrLevel);

      data.save();
      console.log("saved data; ", data);

      return res.status(201).json({
        message: "data created!",
        success: true,
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
