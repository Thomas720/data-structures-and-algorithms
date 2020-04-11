'use strict';

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        // this.newValue = newVal;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        

    }

    insert(val) {
        try {
            let newNode = new Node(val);


            newNode.next = this.head;
            this.head = newNode;
            
        } catch (e) {
            throw e;
        }
    }

    includes(val) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.val === val) return true;
            currentNode = currentNode.next;
        }

        return false;
    }

    toString() {
        let currentNode = this.head;
        let str = '';

        while (currentNode) {
            str += '[' + currentNode.val + '] -> ';
            currentNode = currentNode.next;
        }

        // we exit the while loop when currentNode === null
        str += 'null';
        return str;
    }

    // add to the end of a list
    append(newVal) {
        // check if the list exists
        // traverse to the end

        // O(n)
        // end of the list: currentNode.next = null

        let currentNode = this.head;

        // what if list is empty
        if (!currentNode) {
            this.head = new Node(newVal);
            return;
        }

        // while (null.next)
        while (currentNode.next) {
            // not null
            currentNode = currentNode.next;
        }


        let newNode = new Node(newVal);
        // currentNode is the end of the list
        currentNode.next = newNode;
    }

    insertBefore(newVal, beforeVal) {
        

        let prevCurrentNode = null;
        let currentNode = this.head;

        if (currentNode && currentNode.val === beforeVal) {
            // the head is what we're trying to insert before
            let newNode = new Node(newVal);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        while (currentNode) {
            if (currentNode.val === beforeVal) {
                let newNode = new Node(newVal);
                prevCurrentNode.next = newNode;
                newNode.next = currentNode;
                return;
            }

            prevCurrentNode = currentNode;
            currentNode = currentNode.next;
        }

    
        return false;
    }

    insertAfter(newVal, afterVal) {
       
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.val === afterVal) {
                let newNode = new Node(newVal);

                let nextCurrentNode = currentNode.next;
                currentNode.next = newNode;
                newNode.next = nextCurrentNode;
            }

            currentNode = currentNode.next;
        }

        return false;
    }

   
// Gets the Kth last element
// K the number of elements to count backward.
// The kth last element of the linked list, if it is not large enough, return 0
 // class 07
getKthLastElement(head, k) {
    if (!head || k < 1) {
      return undefined;
    }
  
    let current = head;
    let nBehindCurrent = head;
  
    for (let i = 0; i < k - 1; i++) {
      current = current.next;
      if (!current) {
        return undefined;
      }
    }
  
    while (typeof current.next !== 'undefined') {
      nBehindCurrent = nBehindCurrent.next;
      current = current.next;
    }
  
    return nBehindCurrent;
  }
  


};
   


module.exports = { Node, LinkedList };

