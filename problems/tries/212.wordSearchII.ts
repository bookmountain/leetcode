class TrieNode {
    children: Map<string, TrieNode> = new Map();
    endOfWord: boolean = false;

    addWord(word: string): void {
        let cur: TrieNode = this;
        for (let c of word) {
            if (!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c) as TrieNode;
        }
        cur.endOfWord = true;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    let root = new TrieNode();
    for (let w of words) {
        root.addWord(w);
    }
    let rows = board.length;
    let cols = board[0].length;
    let res = new Set<string>();
    let visit = new Set<string>();

    function dfs(r: number, c: number, node: TrieNode, word: string) {
        if (r < 0 || c < 0 || r === rows || c === cols || visit.has(`${r},${c}`) || !node.children.has(board[r][c])) {
            return;
        }
        visit.add(`${r},${c}`);
        node = node.children.get(board[r][c]) as TrieNode;
        word += board[r][c];
        if (node.endOfWord) {
            res.add(word);
        }

        dfs(r + 1, c, node, word);
        dfs(r - 1, c, node, word);
        dfs(r, c + 1, node, word);
        dfs(r, c - 1, node, word);

        visit.delete(`${r},${c}`);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, root, "");
        }
    }

    return Array.from(res);
}
