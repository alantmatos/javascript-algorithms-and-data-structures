

// // Queue:


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;
    }

    dequeue() {
        if (!this.head) return null;

        let temp = this.head;
        if (this.head === this.tail) this.tail = null;

        this.head = this.head.next;
        this.length--;
        return temp.data;
    }


    print() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
    



}


// const queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.print()

