class TrieNode {
    children: Map<string, TrieNode>;
    word: boolean;
}

class WordDictionary {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.word = true;
    }

class TrieNode {
    children: Map<string, TrieNode>
    word: boolean

    constructor() {
        this.children = new Map();
        this.word = false;
    }
}

class WordDictionary {
    root: TrieNode

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c);
        }
        cur.word = true;
    }

    search(word: string): boolean {
        const dfs = (j: number, node: TrieNode): boolean => {
            let cur = node;

            for (let i = j; i < word.length; i++) {
                let c = word[i];
                if (c === ".") {
                    for (let child of cur.children.values()) {
                        if (dfs(i + 1, child)) {
                            return true;
                        }
                    }
                    return false;
                } else {
                    if (!cur.children.has(c)) {
                        return false;
                    }
                    cur = cur.children.get(c);
                }
            }
            return cur.word;
        };

        return dfs(0, this.root);
    }
}
}
