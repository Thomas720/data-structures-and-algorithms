  
'use strict';

const LinkedList = require('./linkedList/linked-list.js');


const mergeLists = (list1, list2) => {
  
    let mergedList = new LinkedList();

    let l1_tracker = list1;
    let l2_tracker = list2;

    // while either list1 or list2 has a node
    while (l1_tracker || l2_tracker) {
     
        if (l1_tracker) {
            mergedList.append(l1_tracker.newVal);
            l1_tracker = l1_tracker.next;
        }

        if (l2_tracker) {
            mergedList.append(l2_tracker.neVal);
            l2_tracker = l2_tracker.next;
        }
    }

   
    return mergedList.head;
};

const mergeListsO1 = (list1, list2) => {
    

    let l1_tracker = list1;
    let l2_tracker = list2;
    let l3_tracker = null;
    let l3_head = null;

    while (l1_tracker || l2_tracker) {
        if (l1_tracker) {
            if (!l3_head) {
                l3_tracker = l1_tracker;
                l3_head = l1_tracker;
            } else {
                l3_tracker.next = l1_tracker;
                l3_tracker = l3_tracker.next;
            }
            l1_tracker = l1_tracker.next;
        }

        if (l2_tracker) {
            if (!l3_head) {
                l3_tracker = l2_tracker;
                l3_head = l2_tracker;
            } else {
                l3_tracker.next = l2_tracker;
                l3_tracker = l3_tracker.next;
            }
            l2_tracker = l2_tracker.next;
        }
    }

    return l3_head;
};

module.exports = { mergeLists, mergeListsO1 };






