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
            let result = new Array();
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
            let result = new Array();
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
            let result = new Array();
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

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    add(val) {
        
        let node = this.root;
        if(node === null){
            this.root = new Node(vale);
            return;
        } else {

            // recursife function to search tree
            // mean if there is no val in the node it keeps searching to find a new place 
            const searchTree = function(node) {
                if(val < node.val) {
                    if(node.left === null) {
                        node.left = new Node(val);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (val > node.val) {
                    if(node.right === null) {
                        node.right = new Node(val);
                        return;
                    } else if(node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

}

module.exports = {BinaryTree , BinarySearchTree}

