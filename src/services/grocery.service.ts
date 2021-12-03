export const groceryService = {
  addItem,
  getItems,
};

export interface IGroceryItem {
  itemName: string;
  desc?: string;
}

const items = [
  {
    itemName: "חלב",
    desc: "רק חלב אחוז 1",
  },
];

function addItem(item: string) {
  console.log(item);
}

function getItems(): Promise<IGroceryItem[]> {
  return Promise.resolve(items);
}
