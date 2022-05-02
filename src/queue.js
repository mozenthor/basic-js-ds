const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.list = 0;      
  }
  getUnderlyingList() {             
      return this.list
  }

  enqueue(value) {  
      if(this.list == 0){
          this.list = new ListNode(value)
      }
      else{
          let node = this.list
          while(node.next != null){
              node = node.next
          }
          node.next = new ListNode(value)
      }
      return this
  }

  dequeue() {
      let res = this.list.value
      this.list = this.list.next
      return res
  }
}

module.exports = {
  Queue
};
