// Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first.

// A queue is an object (an abstract data structure - ADT) that allows the following operations:

// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it

// Example - Queue

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  get size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.rear == 0;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Current queue is: ", queue);

var removed_element = queue.dequeue();
console.log("Removed element is: ", removed_element);

console.log("The current queue is: ", queue);

var top_element = queue.peek();
console.log("The top element of the queue is: ", top_element);

var queue_length = queue.size;
console.log("The size or length of the queue is: ", queue_length);
