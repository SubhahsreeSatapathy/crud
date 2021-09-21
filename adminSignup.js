const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is admin get request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    msg: "this is admin post request",
  });
});

module.exports = router;
