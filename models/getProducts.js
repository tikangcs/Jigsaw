const db = require("../db/index.js");
require("dotenv").config();

module.exports = (callback) => {
  db.query(
    "SELECT * FROM products WHERE PRODID>=1 AND PRODID <=10",
    (err, payload) => {
      callback(err, payload);
    }
  );
};
