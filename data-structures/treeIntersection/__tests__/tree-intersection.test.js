"use strict";

const { BinaryTree, findIntandUni } = require("../tree-intersection.js");
const Node = require("../node.js");

describe("FInd union and intersection", () => {
  test("it returns null if empty tree", () => {
    let tree = new BinaryTree();
    let tree2 = new BinaryTree();

    expect(findIntandUni(tree.root, tree2.root)).toEqual(undefined);
  });

  test("it returns the first tree is the other one is empty", () => {
    let tree = new BinaryTree();
    let ten = new Node(10);
    tree.root = ten;

    let tree2 = new BinaryTree();

    let results = findIntandUni(tree.root, tree2.root);
    expect(results.data).toEqual(10);
  });

  test("it returns the union and the intersection of two trees", () => {
    let tree = new BinaryTree();

    const one = new Node(1);
    tree.root = one;

    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.left = two;
    one.right = three;

    two.left = four;
    three.left = five;

    let tree2 = new BinaryTree();

    const eleven = new Node(11);
    const threethree = new Node(3);

    const six = new Node(6);
    const seven = new Node(7);
    const twoTwo = new Node(2);

    tree2.root = eleven;
    eleven.left = six;
    eleven.right = seven;

    seven.left = threethree;
    seven.right = twoTwo;

    let results = findIntandUni(tree.root, tree2.root);
    console.log(results.intersection);
    expect(findIntandUni(tree.root, tree2.root)).toEqual({
      union: Map,
      intersection: [],
    });
  });
});
