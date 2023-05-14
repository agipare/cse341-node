const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const app = express();

const terminal = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("access-control-Allow-Headers","Origin,X-Requested-With,Content-type,Accept,Z-Key");
    res.setHeader("Content-Type","Application/json");
    res.setHeader("Access-Control-Allow-Method","GET,POST,PUT,DELETE,OPTIONS");
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
