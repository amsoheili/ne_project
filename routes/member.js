const express = require("express");
const MemberController = require("../controllers/member-controller");
const router = express.Router();
const {
  authenticateTokenMiddleware,
} = require("../middlewares/authenticateTokenMiddleware");

router.get("/", (req, res, next) => {
  res.json({ message: "customer works" });
});

router.post("/login", MemberController.loginMember);

router.post("/attend-shift", MemberController.attendShift);

router.get("/all", authenticateTokenMiddleware, MemberController.getAllMembers);

module.exports = router;
