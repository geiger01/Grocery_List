import { storageService } from "./storage.service";

export const groceryService = {
  addItem,
  getItems,
};

const STORAGE_KEY = "items";

function addItem(item: string) {
  const items = storageService.loadFromStorage(STORAGE_KEY) || [];
  items.unshift(item);
  storageService.saveToStorage(STORAGE_KEY, items);

  getItems()
}

function getItems(): Promise<string[]> {
  return Promise.resolve(storageService.loadFromStorage(STORAGE_KEY) || []);
}
