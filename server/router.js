const router = require("express").Router();

router.route("/").get((req, res) => {
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
