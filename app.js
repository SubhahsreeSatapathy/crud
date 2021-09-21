const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const validator = require("validator");
const admin = require("./admin");
const user = require("./user");
const initDB = require("./initDB");

app.use(bodyparser.json());

app.use("/admin", admin);

app.use("/user", user);

app.get("/", (req, res) => {
  res.send("Welcome to crud operation");
});

app.use((req, res, next) => {
  res.status(404).json({
    error: "url not found",
  });
});

app.listen(5000, () => {
  console.log("Starting Server at port: 5000");
});
