const express = require("express");
const router = express.Router();
const testDatabase = require("../models/admin.model");
const adminController = require("../controllers/admin-controller");
const {
  authenticateTokenMiddleware,
} = require("../middlewares/authenticateTokenMiddleware");

router.get("/", (req, res) => {
  const test = async () => {
    await testDatabase.testDatabase();
  };
  test();
  res.json({ message: "admin works" });
});

// login admin
router.post("/login", adminController.loginAdmin);

// member
// create member
router.post(
  "/member",
  authenticateTokenMiddleware,
  adminController.createMember
);

// delete member
router.delete(
  "/member",
  authenticateTokenMiddleware,
  adminController.deleteMember
);

// update memeber
router.put(
  "/member",
  authenticateTokenMiddleware,
  adminController.updateMember
);

// trainer
// create trainer
router.post(
  "/trainer",
  authenticateTokenMiddleware,
  adminController.createTrainer
);

// delete trainer
router.delete(
  "/trainer",
  authenticateTokenMiddleware,
  adminController.deleteTrainer
);

// update trainer
router.put(
  "/trainer",
  authenticateTokenMiddleware,
  adminController.updateTrainer
);

module.exports = router;
