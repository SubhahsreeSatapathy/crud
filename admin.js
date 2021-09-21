const express = require("express");
const router = express.Router();
const { Admin } = require("./initDB");

router.post("/login", async (req, res) => {
  const logadmin = req.body;
  const admin = await Admin.findOne({
    email: logadmin.email,
    password: logadmin.password,
  });
  if (admin) {
    res.send(admin);
  } else {
    res.send("user not available");
  }
});

router.post("/signup", async (req, res) => {
  const newAdmin = req.body;
  const user = await Admin.findOne({ email: newAdmin.email });
  if (user) {
    return res.send("Admin Already Exists");
  } else {
    Admin.create(newAdmin, function (err, result) {
      if (err) {
        console.log("error while inserting admin");
        res.send("Error while inserting");
      } else {
        res.send(result);
      }
    });
  }
});

router.put("/update", (req, res) => {});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const del = await Admin.findByIdAndDelete(id);
  res.send(del);
});

router.get("/fetch/admin/:email", async (req, res) => {
  const email = req.params.email;
  const log = await Admin.findOne({ email });
  res.send(log);
});

module.exports = router;
