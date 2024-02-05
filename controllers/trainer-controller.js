const TrainerModel = require("../models/trainer.model");
const SECRET_KEY = require("../utils/secretKey");
const jwt = require("jsonwebtoken");

const TrainerController = {
  async loginTrainer(req, res) {
    try {
      const { username, password } = req.body;
      const trainer = await TrainerModel.getTrainer({
        username,
        trainer_password: password,
      });

      if (!trainer) {
        throw new Error("username or password in not valid");
      }

      const token = jwt.sign(
        { userId: trainer.trainer_id, username: username },
        SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );

      res.status(200).json({ token });
    } catch (error) {
      console.log("error in trainer login");
      res.status(401).json({ message: error.message });
    }
  },
  async getAllTrainers(req, res) {
    try {
      const trainers = await TrainerModel.getAllTrainers();

      res.status(200).json({ trainers });
    } catch (error) {
      console.log("error in trainer login");
      res.status(401).json({ message: error.message });
    }
  },
};

module.exports = TrainerController;
