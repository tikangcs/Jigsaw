const app = require("express")();
const path = require("path");
const parser = require("body-parser");
const productsRouter = require("../routes/products.js");
const logger = require("./logger.js");
const authorize = require("./authorize.js");
require("dotenv").config();

const port = process.env.port || 3000;
const host = "0.0.0.0";

app.use([logger]);
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use("/products", productsRouter);
// app.use(express.static('../public'))

app.get("/", (req, res) => {
  res.status(200).send("connected to the server");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(port, host, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening to server at http://localhost:${port}`);
  }
});
