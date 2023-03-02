const MAX = 1000;

class Stack {
    /**
     * @param {number} top
     * @param {number} capacity
     * @param {number[]} arr
     */
    constructor(capacity) {
        this.top = -1;
        this.capacity = capacity;
        this.arr = new Array(capacity);
    }
}

/**
 * @param {number} capacity
 */
const createStake = (capacity) => {
    let newStack = new Stack(capacity);
    return newStack;
};

/**
 * @param {Stack} stack
 */
const isFull = (stack) => {
    return stack.top === stack.capacity - 1;
};

/**
 * @param {Stack} stack
 */
const isEmpty = (stack) => {
    return stack.top === -1;
};

/**
 * @param {Stack} stack
 * @param {number} item
 */
const push = (stack, item) => {
    if (isFull(stack)) {
        return;
    }

    stack.arr[++stack.top] = item;
    console.log(item + " pushed to stack");
};

/**
 * @param {Stack} stack
 */
const pop = (stack) => {
    if (isEmpty(stack)) {
        return false;
    }

    return stack.arr[stack.top--];
};

/**
 * @param {Stack} stack
 */
const peek = (stack) => {
    if (isEmpty(stack)) {
        return false;
    }

    return stack.arr[stack.top];
};

let stack = createStake(MAX);

push(stack, 10);
push(stack, 22);
push(stack, 33);
console.log(pop(stack) + " popped from stack");
