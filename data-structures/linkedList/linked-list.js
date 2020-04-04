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

    append(val) {
            try {
   // constract new node and pass value
   let newNode = new Node(val);
   //intialize current node
   let currentNode = this.head;

   //if empty make head
   if(!this.head) {
       this.head = newNode;
   } else {
       //we start the beggingng
        currentNode = this.head;

        while(currentNode.next) {
            currentNode = currentNode.next
        }

        currentNode.next = newNode;

        return newNode
   }
            } catch(e){
                console.error('error appending new node at the last')
            }
     } 

     insertBefore(value, newVal) {
        
        
        if(newVal > 0 && newVal > this.size ) {  //if the index is out range
            return;
        }
        
        if(newVal === 0) {      //take care of the first index if it 0
            this.head = new Node(value, this.head);
            return;
        }
        
        const newNode = new Node(value); //intializing new node with the value

        let currentNode, previous; //initializing to variable current and previous

        currentNode = this.head;  //set current to first 

        let count = 0;  // making loop star from 0 counter

        while(count < newVal) {
            previous = currentNode; // this is the node befor that we wanted to insert
            count++;
            currentNode = currentNode.next; //making room for new element = Node after the newValue
        }

        newNode.next = currentNode;
        // previous.next = newNode;

        return newNode;

     }

       insertAfter(value, newVal){
    
      let newNode = new Node(newVal);
      let currentNode = this.head;

      while(currentNode){
        if (currentNode.val === value) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return;
        } 
          currentNode = currentNode.next;
      }

     
    }
    
};


   


module.exports = { Node, LinkedList };

