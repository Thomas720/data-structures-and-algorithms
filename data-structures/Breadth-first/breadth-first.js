'use strict';

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class QNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(val) {
       let newNode = null;
        if (!this.front && !this.rear) {
            this.front = newNode;
            this.rear = newNode;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
       
        if (!this.front && !this.rear) return;

        let oldFront = this.front;
        this.front = this.front.next;

        oldFront.next = null;
        return oldFront.val;
    
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    breadthFirst(root = this.root) {
        let printedArr = [];
        if (!root) return;

        let q = new Queue();
        q.enqueue(root); 


        while (q.front) {
           
            if (q.front.val.left) q.enqueue(q.front.val.left);
           
            if (q.front.val.right) q.enqueue(q.front.val.right);

            let removedItem = q.dequeue();
            printedArr.push(removedItem.val);
        }

        return printedArr;
    }
}

module.exports = { TreeNode, QNode, BinaryTree };