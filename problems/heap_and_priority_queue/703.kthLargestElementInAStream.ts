class KthLargest {
    private k: number;
    private heap: number[];

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = [];
        for (let num of nums) {
            this.add(num);
        }
    }

    add(val: number): number {
        if (this.heap.length < this.k) {
            this.heap.push(val);
            this.heapifyUp(this.heap.length - 1);
        } else if (val > this.heap[0]) {
            this.heap[0] = val;
            this.heapifyDown(0);
        }
        return this.heap[0];
    }

    private heapifyUp(index: number): void {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private heapifyDown(index: number): void {
        while (index < this.heap.length) {
            let l = 2 * index + 1;
            let r = 2 * index + 2;
            let smallest = index;

            if (l < this.heap.length && this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (r < this.heap.length && this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
