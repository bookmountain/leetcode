class MedianFinder {
    private nums: number[];
    constructor() {
        this.nums = [];
    }

    addNum(num: number): void {
        let [leftPointer, rightPointer] = [0, this.nums.length];
        while (leftPointer < rightPointer) {
            const mid = Math.floor((leftPointer + rightPointer) / 2);
            if (this.nums[mid] > num) {
                leftPointer = mid + 1;
            } else {
                rightPointer = mid;
            }
        }

        this.nums.splice(leftPointer, 0, num);
    }

    findMedian(): number {
        let median = (0 + this.nums.length) / 2;
        if (median % 1 === 0.5) {
            return this.nums[Math.floor(median)];
        } else {
            const m1 = this.nums[median - 1];
            const m2 = this.nums[median];

            return (m1 + m2) / 2;
        }
    }
}
