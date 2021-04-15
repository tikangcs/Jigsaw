const router = require("express").Router();
const controller = require("../controllers/index.js");

router.route("/").get((req, res) => {
  // let {page, count} = req.query;
  // if (page) {
  //   // return the specified group of items
  // }
  // if (count) {
  //   //return the specified number of items
  // }
  // if (list of items <1) {
  //   res.status(200).send('no products matched your search')
  // res.status(200).json({success:true, data:[]})
  // }
  controller.getProducts(req, res);
});

router.route("/:product_id").get((req, res) => {
  controller.getProductInfo(req, res);
});

router.route("/:product_id/styles").get((req, res) => {
  res.send("list of styles for product #" + req.params.product_id);
});

router.route("/:product_id/related").get((req, res) => {
  res.send("list of related for product #" + req.params.product_id);
});

module.exports = router;
