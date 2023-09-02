class DetectSquares {
    private ptsCount: Map<string, number>;
    private pts: number[][];

    constructor() {
        this.ptsCount = new Map();
        this.pts = [];
    }

    add(point: number[]): void {
        const pointStr = point.toString();
        this.ptsCount.set(pointStr, (this.ptsCount.get(pointStr) || 0) + 1);
        this.pts.push(point);
    }

    count(point: number[]): number {
        let res = 0;
        const [px, py] = point;

        for (const [x, y] of this.pts) {
            if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) {
                continue;
            }
            const xPyStr = [x, py].toString();
            const pxYStr = [px, y].toString();
            res += (this.ptsCount.get(xPyStr) || 0) * (this.ptsCount.get(pxYStr) || 0);
        }

        return res;
    }
}

const detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
console.log(detectSquares.count([11, 10])); // return 1. You can choose:
//   - The first, second, and third points
console.log(detectSquares.count([14, 8])); // return 0. The query point cannot form a square with any points in the data structure.
detectSquares.add([11, 2]); // Adding duplicate points is allowed.
console.log(detectSquares.count([11, 10])); // return 2. You can choose:
//   - The first, second, and third points
//   - The first, third, and fourth points
