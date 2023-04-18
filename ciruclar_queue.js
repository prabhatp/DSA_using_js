/** 
    Circular Queue
1) The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
2) Also referred to as circular buffer or ring buffer and follows the FIFI principle
3) A circular queue will reuse the empty block created during the dequeue operation
4) When working with queues of fixed maximum size, a circular queue is a greate implemenation choice
5) The Circular Queue data structure supports two main operations
    a) Enqueue, which adds an element to the rear/tail of the collection
    b) Dequeue, which removes an element from the front/head of the collection
6) Circular Queue Usage: Clock, Streaming data, Traffic lights 

        Circular Queue Implementation
    a) enqueue(element): Add an element to the queue.
    b) dequeue(): Remove the oldest element from the queue
    c) isFull(): Check if the queue is full
    d) isEmpty(): Check if the queue is empty
    e) peek(): Get the value of the element at the front of the queue without removing it.
    f) size(): Get the number of elements in the queue
    g) print(): Visualize the elements in the queue.
*/

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i;
            let str = '';
            for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " ";
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
