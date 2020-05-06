'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    };

};

class BinaryTree {
    constructor(){
        this.root = null;
    };

    preOrder() {
        if(this.root === null) {
            return null;
        } else {
            let result = [];
            function traversePreOrder(node) {
                result.push(node.val);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
            };
        }

    

    inOrder() {
        if(this.root === null) {
            return null;
        } else {
            let result = [];
            function traverseInOrder(node) {
                node.left && traverseInOrder(node.left);
                result.push(node.val);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }

    }

    postOrder() {

        if(this.root == null) {
            return null;
        } else {
            let result = [];
            function traversePostOrder(node) {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.val);
            };
            traversePostOrder(this.root);
            return result;
        }

    }
}

class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    }

    add(val) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }

     
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.val > val) {
                if (!currentNode.left) {
                    currentNode.left = new Node(val);
                    return;
                } else currentNode = currentNode.left;
            } else if (currentNode.val < val) {
                if (!currentNode.right) {
                    currentNode.right = new Node(val);
                    return;
                } else currentNode = currentNode.right;
            } else if (currentNode.val === val) return;
        }
    }

    contains(val) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.val > val) currentNode = currentNode.left;
            else if (currentNode.val < val) currentNode = currentNode.right;
            else if (currentNode.val === val) return true;
        }

        return false;
    }
}
module.exports = {Node, BinaryTree , BinarySearchTree}

