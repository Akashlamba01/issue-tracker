const express = require("express");
const router = express.Router();
const bugController = require("../controller/bugController.js");
const { Joi, celebrate } = require("celebrate");
// const Joi = require("joi");

router.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      bugAuther: Joi.string().required(),
      bugDisc: Joi.string().min(30).required(),
      bug: Joi.required(),
      bugLevel: Joi.required(),
    }),
  }),
  bugController.create
);

module.exports = router;
