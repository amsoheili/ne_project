const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "cho-oyu.liara.cloud",
  user: "root",
  password: "idXSLZl8fCYPiBwYzB1aKLed",
  database: "net_project",
  port: "32475",
});

const pool = mysql.createPool({
  host: "cho-oyu.liara.cloud",
  user: "root",
  password: "idXSLZl8fCYPiBwYzB1aKLed",
  database: "net_project",
  port: "32475",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();

// function connectToDatabase() {
//   return new Promise((resolve, reject) => {
//     db.connect((err) => {
//       if (err) {
//         reject("Error connecting to MySQL:", err);
//       } else {
//         resolve("Connected to MySQL database");
//       }
//     });
//   });
// }

// module.exports = { connectToDatabase, test };

// function test() {
//   db.query("select * from test", (error, result) => {
//     console.log(result);
//   });

//   // check document for this
//   //   db.execute
// }
