const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const app = express();

const terminal = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(terminal);
    console.log(`Connected to DB and listening on ${terminal}`);
  }
});
