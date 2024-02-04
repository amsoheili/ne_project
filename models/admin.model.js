// const pool = require("../database");

// // const getUserById = async (userId) => {
// //   const [rows] = await pool.execute("SELECT * FROM test WHERE id = ?", [
// //     userId,
// //   ]);
// //   return rows[0];
// // };

// const testDatabase = async () => {
//   pool.execute("select * from test").then((result) => {
//     console.log(result);
//   });
// };

// module.exports = {
//   // getUserById,
//   testDatabase,
// };

// models/admin.js
"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Admin extends Model {}
  Admin.init(
    {
      admin_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Admin",
      tableName: "Admin", // Make sure to set the table name to match your actual table name
      timestamps: false, // Set to true if your table has createdAt and updatedAt columns
    }
  );

  return Admin;
};
