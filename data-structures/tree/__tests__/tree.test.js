/*
You can successfully instantiate an empty tree
You can successfully instantiate a tree and add a single root node
You can successfully add a left and right child to a single root node
You can successfully do a preOrder traversal
You can successfully do an inOrder traversal
You can successfully do a postOrder traversal
You can successfully add a value to a binary search tree
You can search a binary search tree for a value and get the correct true/false result

*/

const tree = require('../tree.js');
const Node = tree.Node;
const BT = tree.BinaryTree;
const BST = tree.BinarySearchTree;



describe('Binary Tree tests', () => {
    it('can successfully instantiate an empty tree', () => {
        let tree = new BT();

        expect(tree).toBeDefined();
        expect(tree.root).toBe(null);
    });

it('can successfully instantiate a tree and add a single root node', () => {
    let tree = new BT();
    let newNode = new Node('One');
    tree.root = newNode;

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.val).toBe('One')
});

it('can successfully add a left and right child to the root', () => {
    let tree = new BT();
    let newNode = new Node('One');
    tree.root = newNode;

    let leftChild = new Node('Two');
    let rightChild = new Node('Three');

    tree.root.left = leftChild;
    tree.root.right = rightChild;

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
    expect(tree.root.val).toBe('One');

    expect(tree.root.left).toBeDefined();
    expect(tree.root.left.val).toBe('Two');

    expect(tree.root.right).toBeDefined();
    expect(tree.root.right.val).toBe('Three');
});

it('can successfully do a preOrder traversal', () => {
    let tree = new BT();

    tree.root = new Node('One');
    tree.root.left = new Node('Two');
    tree.root.left.left = new Node('Three');
    tree.root.left.right = new Node('Four');
    tree.root.right = new Node('Five');
    tree.root.right.right = new Node('Six');
  

    let traversalResults = tree.preOrder();
    expect(traversalResults).toEqual(['One', 'Two', 'Three', 'Four', 'Five', 'Six']);
});

it('can successfully do a inOrder traversal', () => {
    let tree = new BT();

    tree.root = new Node('One');
    tree.root.left = new Node('Two');
    tree.root.left.left = new Node('Four');
    tree.root.left.right = new Node('Five');
    tree.root.right = new Node('Three');
    tree.root.right.right = new Node('Six');


    let traversalResults = tree.inOrder();
    expect(traversalResults).toEqual(['Four', 'Two', 'Five', 'One', 'Two', 'SIx']);
});

it('can successfully do a postOrder traversal', () => {
    let tree = new BT();

    tree.root = new Node('One');
    tree.root.left = new Node('Two');
    tree.root.left.left = new Node('Four');
    tree.root.left.right = new Node('Five');
    tree.root.right = new Node('Three');
    tree.root.right.right = new Node('Six');
   

    let traversalResults = tree.postOrder();
    expect(traversalResults).toEqual(['Four', 'Five', 'Two', 'Six', 'Three', 'One']);
});
});

describe('Binary Search Tree tests', () => {
it('can correctly add a node to the tree', () => {
    let tree = new BST();

    tree.root = new Node(15);
    tree.root.left = new Node(8);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(12);
    tree.root.right = new Node(20);
    tree.root.right.right = new Node(22);

 

    tree.add(6);
    tree.add(14);
    tree.add(19);
    tree.add(16);

    let traversalResults = tree.preOrder();
    expect(traversalResults).toEqual([15, 8, 4, 6, 12, 14, 20, 19, 16, 22]);
});

it('can correctly return true/false if BST contains value', () => {
    let tree = new BST();

    tree.root = new Node(15);
    tree.root.left = new Node(8);
    tree.root.left.left = new Node(4);
    tree.root.left.right = new Node(12);
    tree.root.right = new Node(20);
    tree.root.right.right = new Node(22);


    expect(tree.contains(4)).toBe(true);
    expect(tree.contains(17)).toBe(false);
});
});