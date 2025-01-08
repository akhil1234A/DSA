//largest, smallest, second largest, second smallest, kth largest, kth smallest


class Node {
  constructor(data) {
    this.value = data;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  _insert(current, node) {
    if (node.value < current.value) {
      if (!current.left) {
        current.left = node;
      } else {
        this._insert(current.left, node);
      }
    } else {
      if (!current.right) {
        current.right = node;
      } else {
        this._insert(current.right, node);
      }
    }
  }

  // Smallest and Largest
  findSmallest() {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  findLargest() {
    if (!this.root) return null;
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  // Second Smallest and Second Largest
  findSecondSmallest() {
    if (!this.root || (!this.root.left && !this.root.right)) return null;

    let parent = null;
    let current = this.root;

    while (current.left) {
      parent = current;
      current = current.left;
    }

    if (current.right) {
      current = current.right;
      while (current.left) {
        current = current.left;
      }
      return current.value;
    }

    return parent.value;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return null;

    let parent = null;
    let current = this.root;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      current = current.left;
      while (current.right) {
        current = current.right;
      }
      return current.value;
    }

    return parent.value;
  }

  // Kth Smallest
  findKthSmallest(k) {
    let count = 0;
    let result = null;

    function inOrderTraversal(node) {
      if (!node || result !== null) return;

      inOrderTraversal(node.left);

      count++;
      if (count === k) {
        result = node.value;
        return;
      }

      inOrderTraversal(node.right);
    }

    inOrderTraversal(this.root);
    return result;
  }

  // Kth Largest
  findKthLargest(k) {
    let count = 0;
    let result = null;

    function reverseInOrderTraversal(node) {
      if (!node || result !== null) return;

      reverseInOrderTraversal(node.right);

      count++;
      if (count === k) {
        result = node.value;
        return;
      }

      reverseInOrderTraversal(node.left);
    }

    reverseInOrderTraversal(this.root);
    return result;
  }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(5);
bst.insert(15);
bst.insert(25);
bst.insert(35);

console.log("Smallest:", bst.findSmallest()); // Output: 5
console.log("Largest:", bst.findLargest()); // Output: 35
console.log("Second Smallest:", bst.findSecondSmallest()); // Output: 10
console.log("Second Largest:", bst.findSecondLargest()); // Output: 30
console.log("3rd Smallest:", bst.findKthSmallest(3)); // Output: 15
console.log("2nd Largest:", bst.findKthLargest(2)); // Output: 30
