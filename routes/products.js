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
  controller.getStyles(req, res);
});

router.route("/:product_id/related").get((req, res) => {
  controller.getRelated(req, res);
});

module.exports = router;
