const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = []
  push(element) {
    this.stack.push(element)
    return this
  }

  pop() {
    let last = this.stack[this.stack.length-1]
    this.stack = this.stack.slice(0, this.stack.length-1)
    return last
  }

  peek() {
    return this.stack[this.stack.length-1]
  }
}

module.exports = {
  Stack
};
