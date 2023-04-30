const express = require("express");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
=======
>>>>>>> 6e010f92a710b2d05d76dc6df5a2647461357f3d

const app = express();

const terminal = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

<<<<<<< HEAD
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(terminal);
    console.log(`Connected to DB and listening on ${terminal}`);
  }
});
=======
app.use("/", require("./routes"));

app.listen(terminal, () => console.log(`server is running on port ${terminal}`));
>>>>>>> 6e010f92a710b2d05d76dc6df5a2647461357f3d
