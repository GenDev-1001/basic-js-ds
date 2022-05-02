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
        this.valueHead = null
        this.valueTail = null
    }

    getUnderlyingList() {
        return this.valueHead;
    }

    enqueue(value) {
        const node = new ListNode(value)
        if (this.valueTail) this.valueTail.next = node;
        if (!this.valueHead) this.valueHead = node;
        this.valueTail = node;
    }

    dequeue() {
        if (!this.valueHead) return;
        const currentValue = this.valueHead.value;
        this.valueHead = this.valueHead.next;
        return currentValue
    }
}

module.exports = {
    Queue
};