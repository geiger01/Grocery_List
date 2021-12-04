const express = require("express");
const {
  getGroceryItems,
  updateGroceryItems,
} = require("./groceryItems.controller");

const router = express.Router();

router.get("/", getGroceryItems);
router.post("/", updateGroceryItems);

module.exports = router;
