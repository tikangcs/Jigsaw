const db = require("../db/index.js");
require("dotenv").config();

module.exports = (id, callback) => {
  db.query(`SELECT * FROM products WHERE PRODID = ${id}`, (err, payload) => {
    callback(err, payload);
  });
};
