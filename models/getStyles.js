const db = require("../db/index.js");

module.exports = (product_id, callback) => {
  if (product_id) {
    db.query(
      `SELECT * FROM styles WHERE PRODUCT = ${product_id}`,
      (err, payload) => {
        callback(err, payload);
      }
    );
  }
};
