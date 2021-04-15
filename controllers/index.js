const models = require("../models/index.js");

const getProducts = (req, res) => {
  models.getProducts((err, payload) => {
    if (err) {
      console.error(`Error while retreiving products from database: ${err}`);
      return res.status(500).send(`Error while getting products: ${err}`);
    }
    res.status(200).send(payload);
  });
};

const getProductInfo = (req, res) => {
  const product_id = Number(req.params.product_id);
  if (product_id) {
    models.getProductInfo(product_id, (err, payload) => {
      if (err) {
        console.error(
          `Error while retreiving product info from database: ${err}`
        );
        res.status(500).send(`Error while getting product info: ${err}`);
      } else {
        res.status(200).send(payload);
      }
    });
  }
};

const getStyles = (req, res) => {
  const product_id = Number(req.params.product_id);
  models.getStyles(product_id, (err, payload) => {
    if (err) {
      console.error(`Error occurred while retrieving styles: ${err}`);
      res.status(500).send(`Error while getting style: ${err}`);
    } else {
      res.status(200).send(payload);
    }
  });
};

const getRelated = (req, res) => {
  const product_id = Number(req.params.product_id);
  models.getRelated(product_id, (err, payload) => {
    if (err) {
      console.error(`Error: ${err}`);
      res.status(500).send(`Error: ${err}`);
    } else {
      res.status(200).send(payload);
    }
  });
};

module.exports = {
  getProducts,
  getProductInfo,
  getStyles,
  getRelated,
};
