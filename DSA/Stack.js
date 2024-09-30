// Stack - Last In First Out (LIFO)

// There are some basic operations that allow us to perform different actions on a stack.

// Push: Add an element to the top of a stack
// Pop: Remove an element from the top of a stack
// Peek: Get the value of the top element without removing it
// IsEmpty: Check if the stack is empty
// Size: Finds the number of elements in the stack.

// Example - Stack

class stack {
  constructor() {
    this.items = [];
  }

  push(number) {
    this.items.push(number);
  }

  pop() {
    if (this.items.length === 0) {
      return "Oops, the stack is empty!";
    }
    return this.items.pop();
  }

  print() {
    return this.items;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let myStack = new stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);

console.log("Print element : ", myStack.print());
console.log("Peeked element : ", myStack.peek());
console.log("Popped element : ", myStack.pop());
console.log("Print element : ", myStack.print());
console.log("Popped element : ", myStack.pop());
console.log("Popped element : ", myStack.pop());
console.log("Popped element : ", myStack.pop());

console.log("Check is stack is empty : ", myStack.isEmpty());
