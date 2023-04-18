/*
        Stack
1) The Stack data structure is a sequential collection of elements that follows the principle of Last In First Out (LIFO)
2) The last element inserted into the stack is first element to be removed
3) A stack of plates. The last plate placed on top of the stack is also the first plat removed from the stack
4) Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model
5) The stack data structure supports two main operations
    a) Push, which adds an element to the collection
    b) Pop, which removed the most recently added element from the collection  
    
6) Stack Usage: Browser history tracking, Undo operation when typing, Expression conversions, Call stack in Javascript runtime


******************* Stack Implementation ********************
push(element): add an element to the top of the stack
pop(): Remove the top most element from the stack
peek(): Get the value of the top element without removing it
isEmpty(): Check if the stack is empty
size(): Ge thte number of elements in the stack
print(): Visualize the elements in the stack
*/

class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
