'use strict';

const Node = require('./node');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMax() {

    if( this.root === null ) {
      return null;
    }


    else if( this.root.left === null && this.root.right === null ) {

      return this.root.value;

    }
  
    else {

      const maxLeft = this.findMax(this.root.left);
      const maxRight = this.findMax(this.root.right);

      return Math.max(this.root.value, maxLeft, maxRight);
    }


  }

}

module.exports = BinaryTree;