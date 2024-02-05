const pool = require("../database");

const AdminModel = {
  async getAdmin({ username, admin_password }) {
    const [result] = await pool.execute(
      "select * from Admin where username = ? and admin_password = ?",
      [username, admin_password]
    );
    return result;
  },
};

module.exports = AdminModel;
