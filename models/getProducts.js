const db = require("../db/mysql.js");
require("dotenv").config();

module.exports = (callback) => {
  db.query(
    "SELECT * FROM PRODUCTS WHERE PRODID>=1 AND PRODID <=10",
    (err, payload) => {
      callback(err, payload);
    }
  );
};
