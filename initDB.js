const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/CRUD";

mongoose.connect(url, (err) => {
  if (err) throw err;
  else {
    console.info("INFO: Connected to DB");
  }
});
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  password: String,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = {
  User,
  Admin,
};
