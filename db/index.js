const mysql = require("mysql2");
require("dotenv").config();

var pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "0.0.0.0",
  user: "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "JIGSAW",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on("acquire", function (connection) {
  console.log("Connection %d acquired", connection.threadId);
});

pool.on("connection", function (connection) {
  connection.query("SET SESSION auto_increment_increment=1");
});

pool.on("enqueue", function () {
  console.log("Waiting for available connection slot");
});

pool.on("release", function (connection) {
  console.log("Connection %d released", connection.threadId);
});

module.exports = pool;
