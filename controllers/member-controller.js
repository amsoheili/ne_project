const AttendanceModel = require("../models/attendance.model");
const MemberModel = require("../models/member.model");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../utils/secretKey");

const MemberController = {
  async loginMember(req, res) {
    try {
      const { username, password } = req.body;
      const [member] = await MemberModel.getMember({
        username,
        member_password: password,
      });

      if (!member) {
        throw new Error("username or password in not valid");
      }

      const token = jwt.sign(
        { userId: member.member_id, username: username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      console.log("error in member login");
      res.status(401).json({ message: error.message });
    }
  },
  async getAllMembers(req, res) {
    console.log("here");
    try {
      const members = await MemberModel.getAllMembers();
      console.log(members);
      res.status(200).json({ members });
    } catch (error) {
      console.log("error in member get all");
      res.status(401).json({ message: error.message });
    }
  },
  async attendShift(req, res) {
    try {
      const { member_id, shift_id, attendance_date, is_present } = req.body;
      const [createdAttendance] = await AttendanceModel.create({
        member_id,
        shift_id,
        attendance_date,
        is_present,
      });
      res.status(201).json(createdAttendance);
    } catch (error) {
      console.log("Error creating attendance", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async payDebt(req, res) {
    try {
      const { member_id } = req.body;
      const member = await MemberModel.updateSingleField({
        member_id,
        fieldName: "monthly_cost",
        newAmount: 0,
      });
      res.status(201).json(member);
    } catch (error) {
      console.log("error in member pay debt " + error.message);
      res.status(500).json({ error: "error in member pay debt" });
    }
  },
};

module.exports = MemberController;
