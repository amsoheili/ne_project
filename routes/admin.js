const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../utils/secretKey");
const testDatabase = require("../models/admin.model");
const adminController = require("../controllers/admin-controller");

const authenticateTokenMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token is not valid" });
    }

    console.log(decoded);
    next();
  });
};

router.get("/", (req, res) => {
  const test = async () => {
    await testDatabase.testDatabase();
  };
  test();
  res.json({ message: "admin works" });
});

// login admin
router.post("/login", (req, res, next) => {
  console.log(req.body);

  const { username, password } = req.body;
  console.log(username, password);
  // find user
  // if (true) {
  const token = jwt.sign({ userId: "1234", username: username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  console.log(token);

  res.json({ token });
  res.status(200);
  // } else {
  //   res.status(401).json({ error: "Invalid username or password" });
  // }
});

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
