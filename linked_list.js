/**     Linked List
1) A linked is a linear data structure that includes a series of connected nodes
2) Each node consists of a data value and a pointer that points to the next node
3) The list element can be easily inserted or removed without reallocation or reorganization of the entire structure
4) Random access of elements is not feasible and accessing an element has linear time comlexity
5) A linked list data structure supports three main operations
    a) Insertion - To add an element at the beginning, end or at a given index in the list
    b) Deletion - To remove an item given its index or value
    c) Search - To find and element given its value
6) Linked List Usage: All applications of both stacks and queues are application of linked lists, Image viewer
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    // O(1)
    prepend(value) {
        const node = new Node(value);
        /* if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        } */

        if (!this.isEmpty()) {
            node.next = this.head;
        }
        this.head = node;

        this.size++;
    }

    // O(n)
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let listValue = '';
            while (curr != null) {
                listValue += curr.value + " ";
                curr = curr.next;
            }
            console.log(listValue);
        }
    }
}

const list = new LinkedList();
console.log("List is empty", list.isEmpty());
console.log("List size", list.getSize());
list.print();
/* 
list.prepend(10);
list.print();

list.prepend(20);
list.prepend(30); */
list.append(10);
list.print();

list.append(20);
list.append(30);

list.print();