/* 
            Queue
1) The queue data structures is a sequential collection of elements that follows the principle of First In First Out (fIFO)
2) The first element inserted into the queue is first element to be removed
3) A queue of people. People enter the queue at one end (rear/tail) and leave the queue form the other end (front/head)
4) Queue is an abstract data type. It is defined by its behavior rather than being a mathematial model
5) The Queue data structure support two main operations
    a) Enqueue, which adds and element to the rear/tail for the collection
    b) Dequeue, which removes an element from the front/head of the collection
6)Queue Usage: Printers, CPU task scheduling, Callback queue in Javascript runtime

    Queue Implementation

enqueue(element): Add an element to the queue
dequeue(): Remove the oldest element from the queue
peek(): Ge the value of the element at the top of the queue without removing it
isEmpty(): Check if the queue is empty
size(): Get the number of elements in the queue
print(): Visualize the elements in the queue

*/

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.dequeue();
console.log(queue.peek());
queue.print();
