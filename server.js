const express = require("express");

const app = express();

const terminal = process.env.PORT || 3000;

app.use("/", require("./routes"));

app.listen(terminal, () => console.log(`server is running on port ${terminal}`));