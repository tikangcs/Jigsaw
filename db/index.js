const mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "jigsaw",
});

connection.connect((err) => {
  if (err) console.log(err);
  console.log(`Connected to MySQL as thread id: ${connection.threadId}`);
});

module.exports = connection;
