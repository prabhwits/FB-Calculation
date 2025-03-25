import { categories, items } from "./catalog";
import {
  calculateDefaultSelectionPrice,
  extractCustomGroups,
  mapCustomItemToTreeNode,
  mapCustomizationsToBaseItems,
  mapItemToTreeNode,
} from "./utils";

// Extract Custom Groups
const customGroupCategory = extractCustomGroups(categories);
// console.log("Custom Group Category:\n", JSON.stringify(customGroupCategory, null, 2))

const baseTreeNodes = mapItemToTreeNode(items);
// console.log("Base Tree Nodes:\n", JSON.stringify(baseTreeNodes, null, 2));

const customItems = mapCustomItemToTreeNode(items, customGroupCategory);
// console.log("customItems: \n", JSON.stringify(customItems, null, 2));

const mapItems = mapCustomizationsToBaseItems(baseTreeNodes, customItems);
console.log("mapItems: \n", JSON.stringify(mapItems, null, 2));

const result = calculateDefaultSelectionPrice(mapItems);
console.log(result);

export {};
