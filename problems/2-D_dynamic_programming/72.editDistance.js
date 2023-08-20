var minDistance = function (word1, word2) {
    const cache = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(Infinity));
    for (let j = 0; j < word2.length + 1; j++) {
        cache[word1.length][j] = word2.length - j;
    }
    for (let i = 0; i < word1.length + 1; i++) {
        cache[i][word2.length] = word1.length - i;
    }
    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) {
                cache[i][j] = cache[i + 1][j + 1];
            } else {
                const ins = cache[i + 1][j];
                const del = cache[i][j + 1];
                const rep = cache[i + 1][j + 1];
                cache[i][j] = 1 + Math.min(ins, del, rep);
            }
        }
    }
    console.table(cache);
    return cache[0][0];
};

console.log(minDistance("horse", "ros"));
