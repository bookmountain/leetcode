var partitionLabels = function (s) {
    const lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    console.table(lastIndex);
    const res = [];
    let end = 0;
    let size = 0;
    for (let i = 0; i < s.length; i++) {
        size += 1;
        end = Math.max(end, lastIndex[s[i]]);
        if (i === end) {
            res.push(size);
            size = 0;
        }
    }

    return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
