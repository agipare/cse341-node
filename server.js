const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./DB/connectDB");

const app = express();

const terminal = process.env.PORT || 3000;

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
