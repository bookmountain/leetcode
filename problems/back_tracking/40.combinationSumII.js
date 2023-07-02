var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    function dfs(i, cur, total) {
        if (total === target) {
            res.push([...cur]);
            return;
        }
        if (i >= candidates.length || total > target) {
            return;
        }
        for (let j = i; j < candidates.length; j++) {}
        cur.push(candidates[i]);
        dfs(i + 1, cur, total + candidates[i]);
        cur.pop();
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
            i++;
        }
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};
