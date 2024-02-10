const Users = require("../models/userModel");

// get all user data using handler

async function getAllUser(req, res) {
  const allUser = await Users.find({});
  res.status(200).json(allUser);
}
// get single user data using handler

async function getSingleUser(req, res) {
  const single_user = await Users.findById(req.params.id);
  if (!single_user) {
    res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(single_user);
}
// post : create user
async function createUser(req, res) {
  const body = req.body;

  const result = await Users.create({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    job_type: req.body.job_type,
  });
  console.log("result", result);
  res.status(201).send({ msg: "success", id:result._id });
}
// patch: update user
async function updateUser(req, res) {
  const body = req.body;
  await Users.findByIdAndUpdate(req.params.id, body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ status: "success" });
}

// delete: delete User
async function deleteUser(req, res) {
  await Users.findByIdAndDelete(req.params.id);
  res.status(200).json({ msg: "successfully deleted" });
}

module.exports = {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
