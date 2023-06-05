class TrieNode {
    children: Map<string, TrieNode> = new Map();
    endOfWord: boolean = false;
}

class Trie {
    private root;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.endOfWord = true;
    }

    search(word: string): boolean {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return cur.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let cur = this.root;
        for (let c of prefix) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return true;
    }
}
