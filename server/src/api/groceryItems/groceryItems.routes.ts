const express = require("express");
const {
  getGroceryItems,
  updateGroceryItems,
  deleteGroceryItem,
} = require("./groceryItems.controller");

const router = express.Router();

router.get("/", getGroceryItems);
router.post("/", updateGroceryItems);

router.delete("/:groceryItemId", deleteGroceryItem);

module.exports = router;
