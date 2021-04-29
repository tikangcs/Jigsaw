const db = require("../db/index.js");
const client = require("../server/redis.js");
require("dotenv").config();

module.exports = (id, callback) => {
  client.get(id, (err, payload) => {
    if (err) {
      console.error(`error getting product ${id} from cache: ${err}`);
    }
    if (payload) {
      res.status(200).send(payload);
    } else {
      db.query(
        `SELECT * FROM products WHERE PRODID = ${id}`,
        (err, payload) => {
          client.setex(id, 240, payload);
          callback(err, payload);
        }
      );
    }
  });
};
