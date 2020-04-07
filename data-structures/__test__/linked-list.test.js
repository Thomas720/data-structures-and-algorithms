'use strict';

const classes = require('../linkedList/linked-list.js');
const LinkedList = classes.LinkedList;

describe('happy path', () => {
    it('successfully instantiates an empty list', () => {
        expect(() => {
            return new LinkedList();
        }).not.toThrow();

        let myList = new LinkedList();
        expect(myList.head).toBe(null);
    });

    it('properly inserts a value into the list', () => {
        let myList = new LinkedList();

        expect(() => {
            myList.insert('A');
        }).not.toThrow();
        let str = '[' + myList.head.val + '] -> ' + myList.head.next;
        expect(str).toBe('[A] -> null');
    });

    it('has a head property that points to the beginning', () => {
        let myList = new LinkedList();

        myList.insert('A');
        myList.insert('B');

        expect(myList.head).toBeDefined();
        expect(myList.head.val).toBe('B');
    });

    it('can insert multiple Nodes into the list', () => {
        let myList = new LinkedList();

        myList.insert('E');
        myList.insert('D');
        myList.insert('C');
        myList.insert('B');
        myList.insert('A');

        expect(myList.head).toBeDefined();
        expect(myList.head.val).toBe('A');
        expect(myList.head.next.val).toBe('B');
        expect(myList.head.next.next.val).toBe('C');
        expect(myList.head.next.next.next.val).toBe('D');
        expect(myList.head.next.next.next.next.val).toBe('E');
    });

    it('can search for an existing Node', () => {
        let myList = new LinkedList();
        myList.insert('A');
        myList.insert('B');
        myList.insert('C');

        expect(myList.includes('B')).toBe(true);
    });

    it('can print the list in an expected way', () => {
        let myList = new LinkedList();
        myList.insert(1);
        myList.insert(2);
        myList.insert(3);

        // expected string
        let str = '[3] -> [2] -> [1] -> null';

        expect(myList.toString()).toBe(str);
    });
});

describe('expected failures', () => {
    it("can respond correctly when searching for a Node that doesn't exist", () => {
        let myList = new LinkedList();
        myList.insert('A');
        myList.insert('B');
        myList.insert('C');

        expect(myList.includes('D')).toBe(false);
    });
});
it('can successfully add multiple nodes to the end of a linked list', () => {
    let myList = new LinkedList();
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('D');

    expect(myList.toString()).toBe('[A] -> [B] -> [C] -> [D] -> null');
});

it('can successfully insert a node before a node located in the middle of a linked list', () => {
    let myList = new LinkedList();
    myList.append('A');
    myList.append('B');
    myList.append('x');
    myList.append('D');
    myList.append('E');

    myList.insertBefore('nV', 'x');

    expect(myList.toString()).toBe(
        '[A] -> [B] -> [nV] -> [x] -> [D] -> [E] -> null',
    );
});

it('can successfully insert a node before the first node of a linked list', () => {
    let myList = new LinkedList();
    myList.append('x');

    myList.insertBefore('nV', 'x');
    expect(myList.toString()).toBe('[nV] -> [x] -> null');
});

it('can successfully insert after a node in the middle of the linked list', () => {
    let myList = new LinkedList();
    myList.append('A');
    myList.append('B');
    myList.append('x');
    myList.append('D');
    myList.append('E');

    myList.insertAfter('nV', 'x');

    expect(myList.toString()).toBe(
        '[A] -> [B] -> [x] -> [nV] -> [D] -> [E] -> null',
    );
});

it('can successfully insert a node after the last node of the linked list', () => {
    let myList = new LinkedList();
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('D');
    myList.append('x');

    myList.insertAfter('nV', 'x');

    expect(myList.toString()).toBe(
        '[A] -> [B] -> [C] -> [D] -> [x] -> [nV] -> null',
    );
});

// it('add a node to the end', () => {
//     let myList = new LinkedList();
//     myList.insert('A');
//     myList.append('B');
//     let response = myList.append('C');

//     expect(response.val).toBe('C');  
// });

// it("add a new node with the given newValue immediately before the firs", () => {
//         let myList = new LinkedList();
//         myList.insert('A');
//         myList.append('B');
//         myList.insertBefore('A', 'B');
    
//         expect(myList.head.val).toBe('Z');
//       });


//         it('insert after a node in the middle', () => {
//     let myList = new LinkedList();
//     myList.insert('a');
//     myList.append('b');
//     myList.append('c');
//     myList.insertAfter('b', 'z');

//     let response = myList.toString()
//     expect(response).toBe('{ a } -> { b } -> { z } -> { c } -> NULL');
//   });
