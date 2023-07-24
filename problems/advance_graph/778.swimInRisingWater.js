class PQ {
    constructor() {
        this.queue = [];
    }

    enqueue(node) {
        if (this.queue.length === 0) {
            this.queue.push(node);
            return;
        }
        this.queue.push(node);
        let newIndex = this.queue.length - 1;
        let parentIndex = Math.floor((newIndex - 1) / 2);
        while (parentIndex >= 0 && this.queue[newIndex].time < this.queue[parentIndex].time) {
            let result = this.queue[parentIndex];
            this.queue[parentIndex] = this.queue[newIndex];
            this.queue[newIndex] = result;
            newIndex = parentIndex;
            parentIndex = Math.floor((newIndex - 1) / 2);
        }
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        if (this.queue.length === 1) return this.queue.pop();

        let temp = this.queue.pop();
        this.queue.push(this.queue[0]);
        this.queue[0] = temp;
        const removedNode = this.queue.pop();

        this.minHeapify(0);

        return removedNode;
    }

    minHeapify(i) {
        let smallest;
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        if (l < this.queue.length && this.queue[l].time < this.queue[i].time) {
            smallest = l;
        } else {
            smallest = i;
        }
        if (r < this.queue.length && this.queue[r].time < this.queue[smallest].time) {
            smallest = r;
        }
        if (smallest !== i) {
            let temp = this.queue[i];
            this.queue[i] = this.queue[smallest];
            this.queue[smallest] = temp;
            this.minHeapify(smallest);
        }
    }

    size() {
        return this.queue.length;
    }
}

var swimInWater = function (grid) {
    const n = grid.length;
    const visited = new Set();
    const pq = new PQ();
    visited.add("00");
    pq.enqueue({
        time: grid[0][0],
        row: 0,
        col: 0,
    });
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    while (pq.size()) {
        const { time, row, col } = pq.dequeue();
        if (row === n - 1 && col === n - 1) {
            return time;
        }
        for (const [dr, dc] of directions) {
            const nr = dr + row;
            const nc = dc + col;
            if (nr < 0 || nr === n || nc < 0 || nc === n || visited.has(`${nr}${nc}`)) {
                continue;
            }
            visited.add(`${nr}${nc}`);
            pq.enqueue({
                time: Math.max(time, grid[nr][nc]),
                row: nr,
                col: nc,
            });
        }
    }
};

console.log(
    swimInWater([
        [0, 2],
        [1, 3],
    ])
);
