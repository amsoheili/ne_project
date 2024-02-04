var express = require("express");
var router = express.Router();
const adminRouter = require("./admin");
const customerRouter = require("./customer");
const trainerRouter = require("./trainer");

router.get("/", function (req, res, next) {
  res.json({ hello: "oops" });
});

router.use("/admin", adminRouter);

router.use("/customer", customerRouter);

router.use("/trainer", trainerRouter);

module.exports = router;
