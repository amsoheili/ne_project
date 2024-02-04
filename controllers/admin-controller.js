const { Admin } = require("../models/admin.model");
const Member = require("../models/member.model");
const adminController = {
  // Create a new admin
  async createMember(req, res) {
    try {
      const {
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        active,
      } = req.body;

      const newMember = await Member.create({
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        active,
      });
      res.status(201).json(newMember);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async deleteMember(req, res) {},
  async updateMember(req, res) {},
  async createTrainer(req, res) {},
  async deleteTrainer(req, res) {},
  async updateTrainer(req, res) {},
};

module.exports = adminController;
