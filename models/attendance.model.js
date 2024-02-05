const pool = require("../database");

const AttendanceModel = {
  async create({ member_id, shift_id, attendance_date, is_present }) {
    const [result] = await pool.execute(
      "insert into Attendance (member_id,shift_id,attendance_date,is_present) values (?,?,?,?)",
      [member_id, shift_id, attendance_date, is_present]
    );
    return result;
  },
};

module.exports = AttendanceModel;
