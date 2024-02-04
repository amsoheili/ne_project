const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "customer works" });
});

router.post("/login", (req, res, next) => {
  res.json({ message: "" });
});

module.exports = router;
