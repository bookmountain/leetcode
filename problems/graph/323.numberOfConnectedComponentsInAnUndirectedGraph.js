var countComponents = function (n, edges) {
    const par = [];
    const rank = [];
    for (let i = 0; i <= edges.length; i++) {
        par.push(i);
        rank.push(1);
    }

    function find(n) {
        let p = par[n];
        while (p !== par[p]) {
            par[p] = par[par[p]];
            p = par[p];
        }

        return p;
    }

    function union(n1, n2) {
        const p1 = find(n1);
        const p2 = find(n2);

        if (p1 === p2) {
            return false;
        }

        if (rank[p1] > rank[p2]) {
            par[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            par[p1] = p2;
            rank[p2] += rank[p1];
        }

        return true;
    }

    let count = n;
    for (const [n1, n2] of edges) {
        if (union(n1, n2)) {
            count -= 1;
        }
    }

    return count;
};

console.log(
    countComponents(5, [
        [0, 1],
        [1, 2],
        [3, 4],
    ])
);
