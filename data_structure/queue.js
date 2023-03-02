class Queue {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.front = 0;
        this.size = 0;

        this.rear = capacity - 1;
        this.arr = new Array(capacity);
    }
}

/**
 * @param {Queue} queue
 */
const isFull = (queue) => {
    return queue.size === queue.capacity;
};

/**
 * @param {Queue} queue
 */
const isEmpty = (queue) => {
    return queue.size === 0;
};

/**
 * @param {Queue} queue
 * @param {number} item
 */
const enqueue = (queue, item) => {
    if (isFull(queue)) {
        return;
    }

    queue.rear = (queue.rear + 1) % queue.capacity;
    queue.arr[queue.rear] = item;
    queue.size = queue.size + 1;

    console.log(item + " enqueued to queue");
};

/**
 * @param {Queue} queue
 */
const dequeue = (queue) => {
    if (isEmpty(queue)) {
        return Number.MIN_VALUE;
    }

    let item = queue.arr[queue.front];
    queue.front = (queue.front + 1) % queue.capacity;
    queue.size = queue.size - 1;
    return item;
};

/**
 * @param {Queue} queue
 */
const front = (queue) => {
    if (isEmpty(queue)) {
        return Number.MIN_VALUE;
    }

    return queue.arr[queue.front];
};

/**
 * @param {Queue} queue
 */
const rear = (queue) => {
    if (isEmpty(queue)) {
        return Number.MIN_VALUE;
    }

    return queue.arr[queue.rear];
};

let queue = new Queue(1000);

enqueue(queue, 10);
enqueue(queue, 22);
enqueue(queue, 33);
enqueue(queue, 44);

console.log(dequeue(queue) + " dequeued from queue\n");

console.log("Front item is: " + front(queue));
console.log("Rear item is: " + rear(queue));
