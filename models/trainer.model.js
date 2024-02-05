const pool = require("../database");

const TrainerModel = {
  async getTrainer({ username, trainer_password }) {
    const [result] = await pool.execute(
      "select * from Trainer where username = ? and trainer_password = ?",
      [username, trainer_password]
    );
    return result;
  },
  async getAllTrainers() {
    const [result] = await pool.execute("select * from Trainer");
    return result;
  },
  async create({ username, trainer_password, full_name, email }) {
    const [result] = await pool.execute(
      "insert into Trainer (username, trainer_password, full_name, email) values (?,?,?,?)",
      [username, trainer_password, full_name, email]
    );
    return result;
  },
  async delete({ trainer_id }) {
    const [result] = await pool.execute(
      "delete from Trainer where trainer_id = ?",
      [trainer_id]
    );
    return result;
  },
  async update({ trainer_id, username, trainer_password, full_name, email }) {
    const [result] = await pool.execute(
      "update Trainer set username = ?, trainer_password = ?, full_name = ?, email = ? where trainer_id = ?",
      [username, trainer_password, full_name, email, trainer_id]
    );
    return result;
  },
};

module.exports = TrainerModel;
