const AdminModel = require("../models/admin.model");
const memberModel = require("../models/member.model");
const TrainerModel = require("../models/trainer.model");
const SECRET_KEY = require("../utils/secretKey");
const jwt = require("jsonwebtoken");

const adminController = {
  async loginAdmin(req, res) {
    try {
      const { username, password } = req.body;
      const [admin] = await AdminModel.getAdmin({
        username,
        admin_password: password,
      });

      if (!admin) {
        throw new Error("username or password in not valid");
      }

      const token = jwt.sign(
        { userId: admin.admin_id, username: username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.json({ token });
      res.status(200);
    } catch (error) {
      console.log("error in admin login");
      res.status(401).json({ message: error.message });
    }
  },
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
        is_active,
      } = req.body;

      const newMember = await memberModel.create({
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        is_active,
      });
      res.status(201).json(newMember);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async deleteMember(req, res) {
    try {
      const { member_id } = req.body;

      const deletedMember = await memberModel.delete({
        member_id,
      });
      res.status(201).json(deletedMember);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async updateMember(req, res) {
    try {
      const {
        member_id,
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        is_active,
      } = req.body;

      const updatedMember = await memberModel.update({
        member_id,
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        is_active,
      });

      res.status(201).json(updatedMember);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async createTrainer(req, res) {
    try {
      const { username, trainer_password, full_name, email } = req.body;

      const newTrainer = await TrainerModel.create({
        username,
        trainer_password,
        full_name,
        email,
      });
      res.status(201).json(newTrainer);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async deleteTrainer(req, res) {
    try {
      const { trainer_id } = req.body;

      const deletedTrainer = await TrainerModel.delete({
        trainer_id,
      });
      res.status(201).json(deletedTrainer);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async updateTrainer(req, res) {
    try {
      const { trainer_id, username, trainer_password, full_name, email } =
        req.body;

      const updatedTrainer = await TrainerModel.update({
        trainer_id,
        username,
        trainer_password,
        full_name,
        email,
      });

      res.status(201).json(updatedTrainer);
    } catch (error) {
      console.error("Error creating admin:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = adminController;
