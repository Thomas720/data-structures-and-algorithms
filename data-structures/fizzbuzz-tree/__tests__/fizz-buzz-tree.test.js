'use strict';


const fizzBuzzTree = require('../fizz-buzz-tree.js');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe('fizzBuzzTree', () => {
  it('changes the values ', () => {
    let tree = new BinaryTree();
    tree.root = new Node(15);
    tree.root.left = new Node(3);
    tree.root.right = new Node(5);
    tree.root.right.left = new Node(17);

    let newTree = fizzBuzzTree(tree);
    let newTreeVals = newTree.preOrder();

    expect(newTreeVals).toStrictEqual(['FizzBuzz', 'Fizz', 'Buzz']);
  });

});