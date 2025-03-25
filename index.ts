import { categories, items } from "./catalog";
import {
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

// function mergeTrees(trees: any) {
//   const seenGroups = new Map();
  
//   function processNode(node: any) {
//       if (!node.is_base_item) {
//           const groupId = node.custom_item.custom_group_id;
          
//           if (!seenGroups.has(groupId)) {
//               seenGroups.set(groupId, { ...node, children: [] });
//           } else {
//               // Merge customizations if the group already exists
//               let existingNode = seenGroups.get(groupId);
//               if (!existingNode.custom_item.customization_id.includes(node.custom_item.customization_id)) {
//                   existingNode.custom_item.customization_id += `,${node.custom_item.customization_id}`;
//               }
//           }
//       }

//       // Process children
//       if (node.children) {
//           node.children.forEach((child: any) => {
//               processNode(child);
//           });
//       }
//   }
  
//   // Process each tree
//   trees.forEach((tree: any) => {
//       processNode(tree);
//   });
  
//   // Convert map back to a tree structure
//   const mergedTree: any = [];
//   seenGroups.forEach(node => mergedTree.push(node));
  
//   return mergedTree;
// }

// const uniqueTrees = mergeTrees(mapItems);
// console.log("uniqueTrees: \n", JSON.stringify(uniqueTrees, null, 2));

export {};
