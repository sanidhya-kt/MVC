const mongoose = require("mongoose");

//   user schema--------------
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  job_type: { type: String, required: true },
}, {
    timestamps : true,
});


//  user model-------------------------
const Users = mongoose.model("user", userSchema);

module.exports = Users;