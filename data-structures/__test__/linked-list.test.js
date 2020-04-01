'use strict';

let linkedListContent = require('../linkedList/linked-list.js');

LinkedList = linkedListContent.LinkedList;


describe('Ading new linkd list', () => {
  it('addind New List', () => {
    let list = new LinkedList();
    expect(list).toBeTruthy();
  });

  it('Adding the New Value', () => {
    let list = new LinkedList();
    let response = list.insert('b');

    expect(response.val).toBe('b');
  });

  if('Put Head at the begigin', () => {
    let list = new LinkedList();
    let response = list.insert('b');

    expect(response.head.val).toBe('b');
  })

  it('Search the existing value', () => {
    let list = new LinkedList();
    list.insert('b');
    let response = list.includes('b');

    expect(response).toBe(true);
  });

  it('Printing lists', () => {
    let list = new LinkedList();
    list.insert('b');
    let response = list.toString();

    expect(response).toBe('{ b } -> NULL');
  })
})