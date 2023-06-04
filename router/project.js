const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController");
const { celebrate, Joi } = require("celebrate");
// const { Joi, celebrate } = require("celebrate");

router.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      auther: Joi.string().required(),
      disc: Joi.string().min(30).required(),
    }),
  }),
  projectController.create
);

// router.use('/',)

module.exports = router;
