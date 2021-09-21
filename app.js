const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const validator = require("validator");
const adminLogin = require("./adminLogin");
const userLogin = require("./userLogin");
const adminSignup = require("./adminSignup");
const userSignup = require("./userSignup");

// try {
//   mongoose.connect("mongodb://localhost:27017/CRUD");
//   console.log("DB connection established successfully!");
// } catch (err) {
//   console.error("Error while Db connection");
// }

const url = "mongodb://localhost:27017/Crud";

mongoose.connect(url, (err) => {
  if (err) throw err;
  else {
    console.info("INFO: Connected to DB");
  }
});

app.use("/adminlog", adminLogin);

app.use("/signin", userLogin);

app.use("/adminSignup", adminSignup);

app.use("/signup", userSignup);

app.use((req, res, next) => {
  res.status(404).json({
    error: "url not found",
  });
});

app.listen(5000, () => {
  console.log("Starting Server at port: 5000");
});
