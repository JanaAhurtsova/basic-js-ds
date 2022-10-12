const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = addInside(this.root, data)

    function addInside(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(node.data < data) {
        node.right = addInside(node.right, data);
      } else {
        node.left = addInside(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) !== null ? true : false;
  }

  find(data) {
    return findInside(this.root, data);

    function findInside(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return node.data < data ?
      findInside(node.right, data) : findInside(node.left, data)
    }
  }

  remove(data) {
    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data < data) {
        node.right = removeNode(node.right, data);
        return node
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node
      } else {
        if(!node.right && !node.left) {
          return null;
        }

        if(!node.right) {
          node = node.left;
          return node
        } 
        
        if(!node.left) {
          node = node.right
          return node
        }

        // if both children exists
        let minFromRight = node.right;

        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;

        node.right = removeNode(node.right. minFromRight.data);

        return node;
      }
    }

    this.root = removeNode(this.root, data);

  }

  min() {
    if(!this.root) {
      return null;
    }

    let min = this.root;

    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if(!this.root) {
      return null;
    }

    let max = this.root;
    
    while(max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};