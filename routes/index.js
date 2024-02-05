var express = require("express");
var router = express.Router();
const adminRouter = require("./admin");
const memberRouter = require("./member");
const trainerRouter = require("./trainer");

router.get("/", function (req, res, next) {
  res.json({ hello: "oops" });
});

router.use("/admin", adminRouter);

router.use("/member", memberRouter);

router.use("/trainer", trainerRouter);

module.exports = router;
