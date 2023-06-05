type Item = {
    val: number;
    min: number;
};

class MinStack {
    private stack: Item[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let min = this.stack.length === 0 ? val : this.stack[this.stack.length - 1].min;
        this.stack.push({ val, min: Math.min(min, val) });
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    top(): number | undefined {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1].val;
        }
    }

    getMin(): number | undefined {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1].min;
        }
    }
}
