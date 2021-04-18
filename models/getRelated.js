const db = require("../db/index.js");

module.exports = (id, callback) => {
  db.query(
    `SELECT * FROM RELATED WHERE CURRENTPRODID = ${id}`,
    (err, payload) => {
      callback(err, payload);
    }
  );
};
