'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}



function fizzBuzzTree (tree) {
  let newTree = new BinaryTree();

  newTree.root = fizzBuzzRecursion(tree.root);

  return newTree;
}

function fizzBuzzRecursion(root) {
  let newNode;
  if (root.val % 15 === 0) {
    newNode = new Node('FizzBuzz');
  } else if (root.val % 3 === 0) {
    newNode = new Node('Fizz');
  } else if (root.val % 5 === 0) {
    newNode = new Node('Buzz');
  } else {
    newNode = new Node(`${root.val}`);
  }

  if(root.left) {
    newNode.left = fizzBuzzRecursion(root.left)
  }

  if(root.right) {
    newNode.right = fizzBuzzRecursion(root.right)
  }
  
  return newNode;
}

module.exports = fizzBuzzTree;