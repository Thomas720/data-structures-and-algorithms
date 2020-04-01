'use strict';

class Node {

    constructor(val) {
        this.val = val;
        this.next = next;
        this.prev = prev;

    }

};

class Linkedlist {

    constructor () {
        this.head = null;
    }

    insert(value) {
        
    try{
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        return newNode;
    
    }

    catch(e) {console.error('error when inserting NODE')}

    }

includes(searchValues) {
    try {
        let currentValue = this.head;

        while(currentValue) {

            if(currentValue.val === searchValues){
                console.log(true);
                return true;

            } else {
                currentValue = currentValue.next;
            }

        }

        console.log(false);
        return false;
    }
    catch(e){
        console.error('No value found')
    }
}


toString() {
    try{
        let currentValue = this.head;
        let str = '';

        while (currentValue) {
            str += `{${currentValue.val} } ->`;
            currentValue = currentValue.next;
        }

        str += `NULL`;

        console.log(str);
        return str;
    }
    catch(e) {
        console.error('No String listing')
    }
}
};

module.exports = {Node , Linkedlist};