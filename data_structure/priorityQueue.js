class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        if (this.values.length === 0) {
            this.values.push(newNode);
            return true;
        }
        this.values.push(newNode);
        let newIndex = this.values.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);

        while (parentIndex >= 0 && this.values[newIndex].priority > this.values[parentIndex]) {
            //swap parent and child
            let result = this.values[parentIndex];
            this.values[parentIndex] = this.values[newIndex];
            this.values[newIndex] = result;
            // update index number
            newIndex = parentIndex;
            parenIndex = Math.floor((newIndex - 1) / 2);
        }
    }

    dequeue() {
        if (this.values.length === 0) return null;
        if (this.values.length === 1) return this.values.pop();

        // swap two nodes
        let temp = this.values.pop();
        this.values.push(this.values[0]);
        this.values[0] = temp;
        let removedNode = this.values.pop();

        this.maxHeapify(0);

        return removedNode;
    }

    maxHeapify(i) {
        let largest;
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        if (l < this.values.length && this.values[l].priority > this.values[i].priority) {
            largest = l;
        } else {
            largest = i;
        }
        if (r < this.values.length && this.values[r].priority > this.values[largest].priority) {
            largest = r;
        }

        if (largest != i) {
            let temp = this.values[i];
            this.values[i] = this.values[largest];
            this.values[largest] = temp;
            this.maxHeapify(largest);
        }
    }
}

let pq = new PriorityQueue();
pq.enqueue("common cold", 5);
pq.enqueue("gunshot wound", 1);
pq.enqueue("high fever", 4);
pq.enqueue("broken arm", 2);

while (pq.values.length > 0) {
    console.log(pq.dequeue().value);
}
