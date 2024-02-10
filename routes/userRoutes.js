const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

// user routes------------------------

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").get(getSingleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
