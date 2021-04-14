const express = require("express");
const parser = require("body-parser");
const router = require("./router.js");

const app = express();
const port = process.env.port || 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("connected to the server");
});

app.use("/products", router);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Listening to server at http://localhost:${port}`);
  }
});
