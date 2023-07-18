var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    function getPattern(word, index) {
        return word.slice(0, index) + "*" + word.slice(index + 1);
    }
    wordList.push(beginWord);
    const nei = {};
    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const pattern = getPattern(word, i);
            nei[pattern] = nei[pattern] || [];
            nei[pattern].push(word);
        }
    }
    const queue = [beginWord];
    const visited = new Set();
    visited.add(beginWord);
    let res = 1;
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const word = queue.shift();
            if (word === endWord) {
                return res;
            }
            for (let j = 0; j < word.length; j++) {
                const pattern = getPattern(word, j);
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
