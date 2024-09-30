class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isTreeEmpty() {
    return this.root === null;
  }
  
  makeTree(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

const bst = new BST();
// bst.makeTree(10);
// bst.makeTree(8);
// bst.makeTree(6);
// bst.makeTree(5);
// bst.makeTree(15);
// bst.makeTree(9);
// bst.makeTree(7);

bst.makeTree(30);
bst.makeTree(40);
bst.makeTree(10);
console.log("🚀 :====== bst:", JSON.stringify(bst, null, 4));

const isEmpty = bst.isTreeEmpty();
// console.log("🚀 :====== isEmpty:", isEmpty);
