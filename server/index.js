const app = require("express")();
const path = require("path");
const parser = require("body-parser");
const router = require("./router.js");
const logger = require("./logger.js");
const authorize = require("./authorize.js");

const port = process.env.port || 3000;

app.use([logger, authorize]);
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use("/products", router);
// app.use(express.static('../public'))

app.get("/", (req, res) => {
  res.status(200).send("connected to the server");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening to server at http://localhost:${port}`);
  }
});
