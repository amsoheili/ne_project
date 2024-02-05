const pool = require("../database");

const MemberModel = {
  async getMember({ username, member_password }) {
    const [result] = await pool.execute(
      "select * from Member where username = ? and member_password = ?",
      [username, member_password]
    );
    return result;
  },
  async getAllMembers() {
    const [result] = await pool.execute("select * from Member");
    return result;
  },
  async create({
    username,
    member_password,
    full_name,
    email,
    fitness_goal,
    monthly_cost,
    is_active,
  }) {
    const [result] = await pool.execute(
      "insert into Member (username, member_password, full_name, email, fitness_goal, monthly_cost, is_active) values (?,?,?,?,?,?,?)",
      [
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        is_active,
      ]
    );
    return result;
  },
  async delete({ member_id }) {
    const [result] = await pool.execute(
      "delete from Member where member_id = ?",
      [member_id]
    );
    return result;
  },
  async update({
    member_id,
    username,
    member_password,
    full_name,
    email,
    fitness_goal,
    monthly_cost,
    is_active,
  }) {
    const [result] = await pool.execute(
      "update Member set username = ?, member_password = ?, full_name = ?, email = ?, fitness_goal = ?, monthly_cost = ?, is_active = ? where member_id = ?",
      [
        username,
        member_password,
        full_name,
        email,
        fitness_goal,
        monthly_cost,
        is_active,
        member_id,
      ]
    );
    return result;
  },
};

module.exports = MemberModel;
