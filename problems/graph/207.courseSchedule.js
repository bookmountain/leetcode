var canFinish = function (numCourses, prerequisites) {
    const map = new Map();
    const visited = new Set();
    for (let i = 0; i < numCourses; i++) {
        map.set(i, []);
    }
    for (const [crs, pre] of prerequisites) {
        map.get(crs).push(pre);
    }
    function dfs(crs) {
        if (visited.has(crs)) {
            return false;
        }
        if (map.get(crs).length === 0) {
            return true;
        }
        visited.add(crs);
        for (const pre of map.get(crs)) {
            if (!dfs(pre)) {
                return false;
            }
        }
        visited.delete(crs);
        map.set(crs, []);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};

console.log(
    canFinish(5, [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [3, 4],
    ])
);
