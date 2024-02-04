// "use strict";
// const { Model, DataTypes } = require("sequelize");

// module.exports = (sequelize) => {
//   class Member extends Model {}
//   Member.init(
//     {
//       member_id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       member_password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       full_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       fitness_goal: {
//         type: DataTypes.STRING,
//         defaultValue: null,
//       },
//       monthly_cost: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//       },
//       active: {
//         type: DataTypes.BOOLEAN,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       modelName: "Member",
//       tableName: "Member", // Make sure to set the table name to match your actual table name
//       timestamps: false, // Set to true if your table has createdAt and updatedAt columns
//     }
//   );

//   return Member;
// };

const { DataTypes } = require("sequelize");
const sequelize = require("../config/config.json");

const Member = sequelize.define(
  "Member",
  {
    member_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fitness_goal: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    monthly_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Member;
