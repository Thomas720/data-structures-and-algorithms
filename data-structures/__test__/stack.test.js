const { Stack } = require('../stacksAndQueues/stacks-and-queues.js');

describe('stack operations', () => {
    it('can successfully push onto a stack', () => {
        let myStack = new Stack();
        myStack.push('red');

        expect(myStack.isEmpty()).toBe(false);
        expect(myStack.peek()).toBe('red');
    });

    it('can successfully push multiple nodes onto a stack', () => {
        let myStack = new Stack();
        myStack.push('red');
        myStack.push('orange');
        myStack.push('green');
        myStack.push('blue');

        expect(myStack.isEmpty()).toBe(false);
        expect(myStack.peek()).toBe('blue');
    });

    it('can successfully pop from a stack', () => {
        let myStack = new Stack();
        myStack.push('red');
        myStack.push('orange');

        expect(myStack.isEmpty()).toBe(false);
        expect(myStack.peek()).toBe('orange');

        let poppedNode = myStack.pop();

        expect(poppedNode.val).toBe('orange');
    });

    it('can successfully push multiple nodes onto a stack', () => {
        let myStack = new Stack();
        myStack.push('red');
        myStack.push('orange');
        myStack.push('green');
        myStack.push('blue');

        expect(myStack.isEmpty()).toBe(false);
        expect(myStack.peek()).toBe('blue');

        myStack.pop();
        myStack.pop();
        myStack.pop();
        myStack.pop();

        expect(myStack.isEmpty()).toBe(true);
        expect(myStack.top).toBe(null);
    });

    it('can successfully peek the top node of the stack', () => {
        let myStack = new Stack();
        myStack.push('red');

        expect(myStack.peek()).toBe('red');
    });

    it('can successfully instantiate an empty stack', () => {
        let myStack = new Stack();

        expect(myStack.isEmpty()).toBe(true);
        expect(myStack.top).toBe(null);
    });

    it('raises an exception when peek or pop is called on an empty stack', () => {
        let myStack = new Stack();

        expect(myStack.isEmpty()).toBe(true);
        expect(myStack.top).toBe(null);

        expect(() => {
            myStack.peek();
        }).toThrow();
        expect(() => {
            myStack.pop();
        }).toThrow();
    });
});