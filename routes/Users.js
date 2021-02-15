const express = require("express");
const {
  createUser,
  getAllUsers,
  editUser,
  deleteUser,
} = require("../controllers/Users");
const router = express.Router();

router.get("/", getAllUsers);
/* router.post("/", createUser);
router.put("/", editUser);
router.delete("/", deleteUser); */

module.exports = router;
