const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.head = null;
  } 

  root() {
    return this.head;
  }

  add(data) {
    this.head = addInside(this.head, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addInside(node.right, data);
      } else {
        node.left = addInside(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    return findInside(this.head, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findInside(node.right, data);
      } else {
        return findInside(node.left, data);
      }
    }
  }

  remove(data) {
    this.head = removeEl(this.head, data);

    function removeEl(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeEl(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeEl(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeEl(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.head) {
      return null;
    }

    let min = this.head;
    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let max = this.head;
    while(max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};