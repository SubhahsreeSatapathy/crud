const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is user get request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is user post request",
  });
});

module.exports = router;
