var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    const nei = {};
    wordList.push(beginWord);
    for (const word of wordList) {
        for (let j = 0; j < word.length; j++) {
            const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
            nei[pattern] = nei[pattern] || [];
            nei[pattern].push(word);
        }
    }
    const visited = new Set();
    visited.add(beginWord);
    const queue = [beginWord];
    let res = 1;

    while (queue) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            word = queue.shift();
            if (word === endWord) {
                return res;
            }
            for (let j = 0; j < word.length; j++) {
                const pattern = word.slice(0, j) + "*" + word.slice(j + 1);
                for (const neiWord of nei[pattern]) {
                    if (!visited.has(neiWord)) {
                        queue.push(neiWord);
                        visited.add(neiWord);
                    }
                }
            }
        }
        res++;
    }
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
