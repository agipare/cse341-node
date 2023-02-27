const express = require("express");
const app = express();
const terminal = process.env.PORT || 3000;

app.use('/', require('./routes/index.js'));

app.listen(terminal, ()=>{
    console.log(`server is running at port ${terminal}`);
});