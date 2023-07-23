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
        while (parentIndex >= 0 && this.queue[newIndex].w < this.queue[parentIndex].w) {
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
        if (l < this.queue.length && this.queue[l].w < this.queue[i].w) {
            smallest = l;
        } else {
            smallest = i;
        }
        if (r < this.queue.length && this.queue[r].w < this.queue[smallest].w) {
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

var networkDelayTime = function (times, n, k) {
    const edges = {};
    for (let i = 1; i <= n; i++) {
        edges[i] = edges[i] || [];
    }
    for (const [u, v, w] of times) {
        edges[u].push({ v, w });
    }
    console.log(edges);
    const pq = new PQ();
    pq.enqueue({ v: k, w: 0 });
    const visited = new Set();
    let t = 0;
    while (pq.size()) {
        const { v: v1, w: w1 } = pq.dequeue();
        if (visited.has(v1)) {
            continue;
        }
        visited.add(v1);
        t = Math.max(t, w1);
        for (const { v: v2, w: w2 } of edges[v1]) {
            if (!visited.has(v2)) {
                pq.enqueue({ v: v2, w: w1 + w2 });
            }
        }
    }

    if (visited.size === n) {
        return t;
    } else {
        return -1;
    }
};

console.log(
    networkDelayTime(
        [
            [2, 1, 1],
            [2, 3, 1],
            [3, 4, 1],
        ],
        4,
        2
    )
);
