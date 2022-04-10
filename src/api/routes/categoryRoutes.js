const express = require("express");
const {
  fetchAllCategory,
  fetchCategory,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const router = express.Router();

router.get("/", fetchAllCategory);
router.post("/", addCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", fetchCategory);
router.put("/:id", updateCategory);

module.exports = router;
