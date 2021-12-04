import { Request, Response } from "express";

const groceryItemsService = require("./groceryItems.service");
const { ObjectId } = require("mongodb");

async function getGroceryItems(req: Request, res: Response) {
  try {
    const groceryItems = await groceryItemsService.query();
    res.send(groceryItems);
  } catch (err) {
    console.log("Failed to get groceryItems");
    res.status(500).send({ err: "Failed to get groceryItems" });
  }
}

async function updateGroceryItems(req: Request, res: Response) {
  try {
    const groceryItems = await groceryItemsService.update(req.body);
    res.send(groceryItems);
  } catch (err) {
    console.log("Failed to update item");
    res.status(500).send({ err: "Failed to update item" });
  }
}

module.exports = {
  updateGroceryItems,
  getGroceryItems,
};
