const dotenv = require("dotenv");
const express = require("express");
const app = express();

// todo this is the connection
require("./db/conn");
const user = require("./model/userSchema");

//* ----------------- these all are middlewares
//*is se app json ko samjh jay ga
app.use(express.json());

app.listen(8080, () => {
  console.log("server listing to port 8080");
});
