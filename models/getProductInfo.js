const db = require("../db/mysql.js");
require("dotenv").config();

module.exports = (id, callback) => {
  db.query(`SELECT * FROM PRODUCTS WHERE PRODID = ${id}`, (err, payload) => {
    callback(err, payload);
  });
};
