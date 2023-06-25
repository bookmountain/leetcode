var leastInterval = function (tasks, n) {
    const map = new Array(26).fill(0);
    for (const t of tasks) {
        const index = t.charCodeAt(0) - "A".charCodeAt(0);
        map[index]++;
    }
    map.sort((a, b) => b - a);
    maxFrequency = map[0];
    let idleSlots = (maxFrequency - 1) * n;
    for (let i = 1; i < map.length; i++) {
        idleSlots -= Math.min(maxFrequency - 1, map[i]);
    }
    idleSlots = Math.max(idleSlots, 0);

    return tasks.length + idleSlots;
};
