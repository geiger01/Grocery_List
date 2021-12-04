import { storageService } from "./storage.service";

export const groceryService = {
  addItem,
  getItems,
  markItem,
};

export interface IGroceryItem {
  itemName: string;
  isMarked: boolean;
}

const STORAGE_KEY = "items";

function addItem(item: string) {
  const items = storageService.loadFromStorage(STORAGE_KEY) || [];
  items.unshift({ itemName: item, isMarked: false });
  storageService.saveToStorage(STORAGE_KEY, items);

  getItems();
}

function markItem(itemIdx: number) {
  const items = storageService.loadFromStorage(STORAGE_KEY) || [];
  items[itemIdx].isMarked = !items[itemIdx].isMarked;
  storageService.saveToStorage(STORAGE_KEY, items);

  getItems();
}

function getItems(): Promise<IGroceryItem[]> {
  return Promise.resolve(storageService.loadFromStorage(STORAGE_KEY) || []);
}
