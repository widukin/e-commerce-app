const express = require("express");
const {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/Products");
const router = express.Router();

router.get("/", getAllProducts);
/* router.post("/", createProduct);
router.put("/", editProduct);
router.delete("/", deleteProduct); */

module.exports = router;
