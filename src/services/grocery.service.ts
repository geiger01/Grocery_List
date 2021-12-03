export const groceryService = {
  //   addItem,
  getItems,
};

export interface IGroceryItem {
  itemName: string;
  amount: number;
  desc: string;
}

const items = [
  {
    itemName: "חלב",
    amount: 1,
    desc: "רק חלב אחוז 1",
  },
];

// function addItem() {}

function getItems(): Promise<IGroceryItem[]> {
  return Promise.resolve(items);
}
