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
    this.root = addInside(this.root, data);

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
    return hasInside(this.root, data);

    function hasInside(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data > node.data ? hasInside(node.right, data) : hasInside(node.left, data);
    }
  }

  find(data) {
    return findInside(this.root, data);

    function findInside(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data > node.data ? findInside(node.right, data) : findInside(node.left, data);
    }
  }

  remove(data) {
    this.root = removeInside(this.root, data);

    function removeInside(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeInside(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeInside(node.left, data);
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
        node.right = removeInside(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root) {
      return null;
    }

    let min = this.root;
    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.root) {
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