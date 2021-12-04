const dbService = require("../../services/db.service");
const { ObjectId } = require("mongodb");

export interface IGroceryItem {
  itemName: string;
  isMarked: boolean;
}

async function query() {
  try {
    const collection = await dbService.getCollection("items");
    const groceryItems = await collection.find().toArray();
    return groceryItems[0];
  } catch (err) {
    console.log("cannot find groceryItems", err);
    throw err;
  }
}

async function update(items: any) {
  try {
    const _id = items._id;
    const id = ObjectId(items._id);
    delete items._id;
    const collection = await dbService.getCollection("items");
    await collection.updateOne({ _id: id }, { $set: { ...items } });
    items._id = _id;
    return items;
  } catch (err) {
    console.log(`cannot update items ${items}`, err);
    throw err;
  }
}

module.exports = {
  query,
  update,
};
