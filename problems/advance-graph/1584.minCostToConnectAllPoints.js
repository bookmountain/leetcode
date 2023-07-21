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
        while (parentIndex >= 0 && this.queue[newIndex].dist < this.queue[parentIndex].dist) {
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
        if (l < this.queue.length && this.queue[l].dist < this.queue[i].dist) {
            smallest = l;
        } else {
            smallest = i;
        }
        if (r < this.queue.length && this.queue[r].dist < this.queue[smallest].dist) {
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

var minCostConnectPoints = function (points) {
    const n = points.length;
    const distToMST = new Array(n).fill(Infinity);
    const visited = new Set();

    distToMST[0] = 0;
    const pq = new PQ();
    pq.enqueue({ dist: 0, node: 0 });

    let minCost = 0;

    while (pq.size() > 0) {
        const { dist, node } = pq.dequeue();
        if (!visited.has(node)) {
            visited.add(node);
            minCost += dist;

            for (let i = 0; i < n; i++) {
                if (!visited.has(i)) {
                    const [x1, y1] = points[node];
                    const [x2, y2] = points[i];
                    const newDist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                    if (newDist < distToMST[i]) {
                        distToMST[i] = newDist;
                        pq.enqueue({ dist: newDist, node: i });
                    }
                }
            }
        }
    }

    return minCost;
};

console.log(
    minCostConnectPoints([
        [0, 0],
        [2, 2],
        [3, 10],
        [5, 2],
        [7, 0],
    ])
);
