const router = require("express").Router();

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
  res.send("list of products");
});

router.route("/:product_id").get((req, res) => {
  res.send("product info for product #" + req.params.product_id);
});

router.route("/:product_id/styles").get((req, res) => {
  res.send("list of styles for product #" + req.params.product_id);
});

router.route("/:product_id/related").get((req, res) => {
  res.send("list of related for product #" + req.params.product_id);
});

module.exports = router;
