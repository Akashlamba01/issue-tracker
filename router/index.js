const express = require("express");
const router = express.Router();

router.use("/project", require("./project"));
router.use("/bug", require("./bug"));

module.exports = router;
