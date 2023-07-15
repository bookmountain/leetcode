var findOrder = function (numCourses, prerequisites) {
    const map = new Map();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for (const [crs, pre] of prerequisites) {
        map.get(crs).push(pre);
    }
    const output = [];
    const visited = new Set();
    const cycle = new Set();
    function dfs(crs) {
        if (cycle.has(crs)) {
            return false;
        }
        if (visited.has(crs)) {
            return true;
        }
        cycle.add(crs);
        for (const pre of map.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        cycle.delete(crs);
        visited.add(crs);
        output.push(crs);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        }
    }
    return output;
};

console.log(
    findOrder(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
    ])
);
