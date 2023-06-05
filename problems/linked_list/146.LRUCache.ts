class LRUCache {
    private capacity: number;
    private cache: Map<number, number> = new Map();
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        const val = this.cache.get(key);
        if (val === undefined) {
            return -1;
        }
        this.cache.delete(key);
        this.cache.set(key, val);

        return val;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}
