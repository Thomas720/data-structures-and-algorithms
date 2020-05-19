class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BT {
    constructor() {
        this.root = null;
    }

    findMaximumValue(root = this.root) {
        
        if (!root) return;

        let rootMax = root.val;
        let leftMax, rightMax;

        if (root.left) leftMax = this.findMaximumValue(root.left);

        if (root.right) rightMax = this.findMaximumValue(root.right);
        let max = rootMax;

        if (leftMax > max) max = leftMax;
        if (rightMax > max) max = rightMax;

        return max;
    }
}

module.exports = BT;

// let sampleTree = new BT();

// sampleTree.root = new Node(2);
// sampleTree.root.left = new Node(7);
// sampleTree.root.right = new Node(5);
// sampleTree.root.left.left = new Node(2);
// sampleTree.root.left.right = new Node(1);
// sampleTree.root.right.right = new Node(-9);

// console.log(sampleTree.findMaximumValue(null));