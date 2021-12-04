import { storageService } from "./storage.service";

import Axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "//localhost:3030";

const axios = Axios.create({
  withCredentials: true,
});

export const groceryService = {
  addItem,
  getItems,
  markItem,
};

export interface IGroceryItem {
  itemName: string;
  isMarked: boolean;
}

async function addItem(item: string) {
  try {
    const items = await getItems();
    items.data.unshift({ itemName: item, isMarked: false });
    const updatedItems = await axios.post(
      `${BASE_URL}/api/groceryItems`,
      items
    );
    return updatedItems.data;
  } catch (err) {
    console.log(err);
  }
}

async function markItem(itemIdx: number) {
  try {
    const items = await getItems();
    items.data[itemIdx].isMarked = !items.data[itemIdx].isMarked;
    const updatedItems = await axios.post(
      `${BASE_URL}/api/groceryItems`,
      items
    );
    return updatedItems.data;
  } catch (err) {
    console.log(err);
  }
}

async function getItems(): Promise<any> {
  try {
    const items = await axios.get(`${BASE_URL}/api/groceryItems`);
    return items.data;
  } catch (err) {
    console.log(err);
  }
}
