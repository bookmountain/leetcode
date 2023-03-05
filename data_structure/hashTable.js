class HashTable {
    constructor(size) {
        this.size = size;
        this.table = [];
        for (let i = 0; i < this.size; i++) {
            this.table.push([]);
        }
    }

    parse(str) {
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += str.charCodeAt(i);
        }
        return sum % this.size;
    }

    division(key) {
        return key % this.size;
    }

    multiplication(key) {
        let parsedKey = 0;
        if (typeof key !== "number") {
            parsedKey = this.parse(key);
        } else {
            parsedKey = key;
        }
        let A = (Math.sqrt(5) - 1) / 2;
        return Math.floor(this.size * ((parsedKey * A) % 1));
    }

    set(key, value) {
        let index = this.multiplication(key);
        this.table[index].push({ key, value });
    }

    get(key) {
        let index = this.multiplication(key);
        let bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return null;
    }

    printAll() {
        console.log(this.table);
    }
}

let myHashTable = new HashTable(6);
// myHashTable.set(11424, "Mike");
// myHashTable.set(6254, "John");
// myHashTable.set(4171, "Jane");
// myHashTable.set(554, "Drake");

myHashTable.set("white", "#ffffff");
myHashTable.set("black", "#000000");
myHashTable.set("red", "#ff0000");

myHashTable.printAll();

console.log(myHashTable.get("white"));
