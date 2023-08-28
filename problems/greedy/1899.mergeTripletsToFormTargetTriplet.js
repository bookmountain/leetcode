var mergeTriplets = function (triplets, target) {
    let possible = [0, 0, 0];
    for (const triplet of triplets) {
        if (triplet[0] <= target[0] && triplet[1] <= target[1] && triplet[2] <= target[2]) {
            possible[0] = Math.max(possible[0], triplet[0]);
            possible[1] = Math.max(possible[1], triplet[1]);
            possible[2] = Math.max(possible[2], triplet[2]);
        }
    }
    return possible[0] === target[0] && possible[1] === target[1] && possible[2] === target[2];
};

console.log(
    mergeTriplets(
        [
            [2, 5, 3],
            [1, 8, 4],
            [1, 7, 5],
        ],
        [2, 7, 5]
    )
);
