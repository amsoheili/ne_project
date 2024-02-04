const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "net_project",
  "root",
  "idXSLZl8fCYPiBwYzB1aKLed",
  {
    host: "cho-oyu.liara.cloud",
    dialect: "mysql",
  }
);

module.exports = sequelize;
