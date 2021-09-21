const express = require("express");
const router = express.Router();
const { User } = require("./initDB");

router.get("/login", (req, res) => {});

router.post("/signup", (req, res) => {});

router.put("/update", (req, res) => {});

router.delete("/delete", (req, res) => {});

module.exports = router;
