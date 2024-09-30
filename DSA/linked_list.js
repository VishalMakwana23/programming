class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.size = 1;
  }
  appendNode(newNodeData) {
    let newNode = {
      value: newNodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  traverse() {
    let count = 0;
    let currentNode = this.head;
    while (count < this.size) {
        console.log("🚀 :====== currentNode:", currentNode)
        currentNode = currentNode.next;
      count++;
    }
  }
}

const linkedList = new List(200);
linkedList.appendNode(250);
linkedList.appendNode(300)
linkedList.traverse()
// console.log("🚀 :====== linkedList:", linkedList);
