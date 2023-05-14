class TimeMap {
    private map = {};
    constructor() {}

    set(key: string, value: string, timestamp: number): void {
        if (this.map[key]) {
            this.map[key].push([value, timestamp]);
        } else {
            this.map[key] = [[value, timestamp]];
        }
    }

    get(key: string, timestamp: number): string {
        const values = this.map[key];
        let res = "";
        if (values) {
            let l = 0;
            let r = values.length - 1;
            while (l <= r) {
                let mid = Math.floor((l + r) / 2);
                if (values[mid][1] <= timestamp) {
                    res = values[mid][0];
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return res;
    }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1); // return "bar"
timeMap.get("foo", 3); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4); // return "bar2"
timeMap.get("foo", 5); // return "bar2"
