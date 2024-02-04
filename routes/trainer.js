const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "trainer works" });
});

router.post("/login", (req, res, next) => {
  res.json({ message: "" });
});

module.exports = router;
