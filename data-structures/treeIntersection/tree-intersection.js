"use strict";

const node = require("./node");

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function findIntandUni(root1, root2) {
  //Edge casses

  if (root1 === null && root2 === null) {
    return;
  }
  if (root1 && root2 === null) {
    return root1;
  }
  if (root1 === null && root2) {
    return root2;
  } else {
    let hash = new Map();
    let intersection = [];

    // this function traverses through the first tree and pushes the values into the hash map

    function traverse(root1) {
      if (hash.has(root1.value) === false) {
        return hash.set(root1.value);
      } else {
        return traverse(root1.left) || traverse(root1.right);
      }
    }
    //this function will check if the second tree's values are in the hash map, if they are, it will set them in the intersection collection, else it adds them to the union

    function findIntersection(root2) {
      if (hash.has(root2.value)) {
        return intersection.push(root2.value);
      } else {
        hash.set(root2.value);
        return findIntersection(root2.left) || findIntersection(root2.right);
      }
    }
    return { union: hash, intersection: intersection };
  }
}

module.exports = { BinaryTree, findIntandUni };
