const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/";

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    else {
      console.info("INFO: Connected to DB");
    }
  }
);
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
