const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hasan124",
  database: "ibroker",
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected");
});

module.exports = db;

db.query("select * from employee", (err, res) => {
  return console.log(res);
});
