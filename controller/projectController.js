const ProjectModel = require("../models/project");

module.exports = {
  create: async (req, res) => {
    try {
      let data = await ProjectModel.create(req.body);

      return res.status(200).json({
        message: "success",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "fail",
        sucsess: false,
      });
    }
  },
};
