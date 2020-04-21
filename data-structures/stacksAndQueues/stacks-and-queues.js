const Node = require('./node.js');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(val) {
        // adding to the queue

        let nodeToQueue = new Node(val);

        if (this.isEmpty()) {
            this.front = nodeToQueue;
            this.rear = nodeToQueue;
            return;
        }

        this.rear.next = nodeToQueue;
        this.rear = nodeToQueue;
    }

    dequeue() {
        let nodeToDequeue = this.front;

        if (this.isEmpty()) {
            throw 'NullReferenceException';
            return;
        }

        this.front = this.front.next;
        nodeToDequeue.next = null;

        return nodeToDequeue;
    }

    peek() {
        // look at the front of the queue

        // if the queue is empty
        if (this.isEmpty()) {
            throw 'NullReferenceException';
            return;
        }

        return this.front.val;
    }

    isEmpty() {
        // if the queue is empty, front and rear are null

        return !this.front && !this.rear;
    }
}


class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        let nodeToPush = new Node(val);

        // is the stack empty?
        if (this.isEmpty()) {
            this.top = nodeToPush;
            return;
        }

        nodeToPush.next = this.top;
        this.top = nodeToPush;
    }

    pop() {
        let nodeToPop = this.top;

        // is the stack empty?
        if (this.isEmpty()) {
            throw 'NullReferenceException';
            return;
        }

        this.top = this.top.next;
        nodeToPop.next = null;

        return nodeToPop;
    }

    // get the value of the top node
    peek() {
        if (this.top) return this.top.val;

        // when the top is NULL and you try to peek, throw an error
        throw 'NullReferenceException';
    }

    isEmpty() {
        return !this.top;
    }
}

module.exports = { Queue, Stack}