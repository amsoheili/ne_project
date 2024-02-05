const express = require("express");
const TrainerController = require("../controllers/trainer-controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "trainer works" });
});

router.post("/login", TrainerController.loginTrainer);

router.get("/all", TrainerController.getAllTrainers);

module.exports = router;
