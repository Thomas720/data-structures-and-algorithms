'use strict';

const LinkedList = require('../linkedList/linked-list.js');
const mergeLists = require('../ll-merge.js');
const ineff = mergeLists.mergeLists;
const eff = mergeLists.mergeListsO1;

describe('happy path', () => {
    it('works for two lists of the same length', () => {
        // create the first list
        let list1 = new LinkedList();
        list1.append(1);
        list1.append(3);
        list1.append(2);

        let list2 = new LinkedList();
        list2.append(5);
        list2.append(9);
        list2.append(4);

        let zipped = eff(list1.head, list2.head);

        expect(zipped.val).toBe(1);
        expect(zipped.next.val).toBe(5);
        expect(zipped.next.next.val).toBe(3);
        expect(zipped.next.next.next.val).toBe(9);
        expect(zipped.next.next.next.next.val).toBe(2);
        expect(zipped.next.next.next.next.next.val).toBe(4);
        expect(zipped.next.next.next.next.next.next).toBe(null);

        let expectedValues = [1, 5, 3, 9, 2, 4, null];
        let currentNode = zipped;
        let i = 0;

        while (currentNode) {
            expect(currentNode.newVal).toBe(expectedValues[i]);
            currentNode = currentNode.next;
            i++;
        }
    });
});
