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

    // For index not found,
    // For index 0
    // For index in between the list
    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index-1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while(prev.next && prev.next.value !== value) {
                prev = prev.next;
            }

            if (prev.next) {
                const removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;
        } 
        let i = 0;
        let curr = this.head;
        while(curr) {
            if (curr.value === value) {
                return i;
            } 
            curr = curr.next;
            i++;
        }
        return -1;
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr; 
            curr = next;
        }
        this.head = prev;
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
list.append(40);

list.print();

// console.log(list.removeFrom(10));
// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeFrom(2));
// console.log(list.removeValue(40));
// list.print();

// console.log(list.search(20));

list.reverse();
list.print();